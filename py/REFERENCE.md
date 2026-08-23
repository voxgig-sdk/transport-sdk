# Transport Python SDK Reference

Complete API reference for the Transport Python SDK.


## TransportSDK

### Constructor

```python
from transport_sdk import TransportSDK

client = TransportSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `TransportSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = TransportSDK.test()
```


### Instance Methods

#### `Connection(data=None)`

Create a new `ConnectionEntity` instance. Pass `None` for no initial data.

#### `Location(data=None)`

Create a new `LocationEntity` instance. Pass `None` for no initial data.

#### `Stationboard(data=None)`

Create a new `StationboardEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## ConnectionEntity

```python
connection = client.Connection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connections` | `list` | No | Found connections |
| `from` | `Any` | No | Departure station of search |
| `stations` | `list` | No | All stations from query |
| `to` | `Any` | No | Arrival station of search |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Connection().list()
for connection in results:
    print(connection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConnectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LocationEntity

```python
location = client.Location()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coordinate` | `Any` | No | The location coordinates. |
| `distance` | `float` | No | If search has been with coordinates, distance to original point in meters. |
| `name` | `str` | No | The name of this location. |
| `score` | `int` | No | The score with regard to the search request, the higher the better. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Location().list()
for location in results:
    print(location)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LocationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StationboardEntity

```python
stationboard = client.Stationboard()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `capacity1st` | `int` | No | The maximum estimated occupation load of 1st class coaches (e.g. |
| `capacity2nd` | `int` | No | The maximum estimated occupation load of 2nd class coaches (e.g. |
| `category` | `str` | No | The type of connection this is (e.g. |
| `categoryCode` | `int` | No | An internal category code, indicates the type of the public transport vehicle. |
| `name` | `str` | No | The name of the connection (e.g. |
| `number` | `str` | No | The number of the connection's line (e.g. |
| `operator` | `str` | No | The operator of the connection's line (e.g. |
| `passList` | `list` | No | Checkpoints the train passed on the journey. |
| `subcategory` | `str` | No |  |
| `to` | `str` | No | The final destination of this line (e.g. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Stationboard().list()
for stationboard in results:
    print(stationboard)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StationboardEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = TransportSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

