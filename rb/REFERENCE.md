# Transport Ruby SDK Reference

Complete API reference for the Transport Ruby SDK.


## TransportSDK

### Constructor

```ruby
require_relative 'Transport_sdk'

client = TransportSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `TransportSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = TransportSDK.test
```


### Instance Methods

#### `Connection(data = nil)`

Create a new `Connection` entity instance. Pass `nil` for no initial data.

#### `Location(data = nil)`

Create a new `Location` entity instance. Pass `nil` for no initial data.

#### `Stationboard(data = nil)`

Create a new `Stationboard` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## ConnectionEntity

```ruby
connection = client.Connection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connections` | `Array` | No | Found connections |
| `from` | `Object` | No | Departure station of search |
| `stations` | `Array` | No | All stations from query |
| `to` | `Object` | No | Arrival station of search |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Connection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ConnectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LocationEntity

```ruby
location = client.Location
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coordinate` | `Object` | No | The location coordinates. |
| `distance` | `Float` | No | If search has been with coordinates, distance to original point in meters. |
| `name` | `String` | No | The name of this location. |
| `score` | `Integer` | No | The score with regard to the search request, the higher the better. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Location.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LocationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StationboardEntity

```ruby
stationboard = client.Stationboard
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `capacity1st` | `Integer` | No | The maximum estimated occupation load of 1st class coaches (e.g. |
| `capacity2nd` | `Integer` | No | The maximum estimated occupation load of 2nd class coaches (e.g. |
| `category` | `String` | No | The type of connection this is (e.g. |
| `categoryCode` | `Integer` | No | An internal category code, indicates the type of the public transport vehicle. |
| `name` | `String` | No | The name of the connection (e.g. |
| `number` | `String` | No | The number of the connection's line (e.g. |
| `operator` | `String` | No | The operator of the connection's line (e.g. |
| `passList` | `Array` | No | Checkpoints the train passed on the journey. |
| `subcategory` | `String` | No |  |
| `to` | `String` | No | The final destination of this line (e.g. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Stationboard.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StationboardEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = TransportSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

