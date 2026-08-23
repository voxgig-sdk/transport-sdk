# Transport Lua SDK Reference

Complete API reference for the Transport Lua SDK.


## TransportSDK

### Constructor

```lua
local sdk = require("transport_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Connection(data)`

Create a new `Connection` entity instance. Pass `nil` for no initial data.

#### `Location(data)`

Create a new `Location` entity instance. Pass `nil` for no initial data.

#### `Stationboard(data)`

Create a new `Stationboard` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## ConnectionEntity

```lua
local connection = client:Connection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connections` | `table` | No | Found connections |
| `from` | `any` | No | Departure station of search |
| `stations` | `table` | No | All stations from query |
| `to` | `any` | No | Arrival station of search |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Connection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConnectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LocationEntity

```lua
local location = client:Location(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coordinate` | `any` | No | The location coordinates. |
| `distance` | `number` | No | If search has been with coordinates, distance to original point in meters. |
| `name` | `string` | No | The name of this location. |
| `score` | `number` | No | The score with regard to the search request, the higher the better. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Location():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LocationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StationboardEntity

```lua
local stationboard = client:Stationboard(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `capacity1st` | `number` | No | The maximum estimated occupation load of 1st class coaches (e.g. |
| `capacity2nd` | `number` | No | The maximum estimated occupation load of 2nd class coaches (e.g. |
| `category` | `string` | No | The type of connection this is (e.g. |
| `categoryCode` | `number` | No | An internal category code, indicates the type of the public transport vehicle. |
| `name` | `string` | No | The name of the connection (e.g. |
| `number` | `string` | No | The number of the connection's line (e.g. |
| `operator` | `string` | No | The operator of the connection's line (e.g. |
| `passList` | `table` | No | Checkpoints the train passed on the journey. |
| `subcategory` | `string` | No |  |
| `to` | `string` | No | The final destination of this line (e.g. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Stationboard():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StationboardEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

