# Transport SDK

Query Swiss public transport stations, journeys, and live station boards from opendata.ch

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Transport API

The Transport API is a free, unauthenticated JSON API for Swiss public transport, run by [opendata.ch](https://opendata.ch/). It wraps the timetable from [timetable.search.ch](https://timetable.search.ch/) behind three simple HTTP resources for finding stops, planning journeys, and watching a station board.

What you get from the API:

- Location search by name or WGS84 coordinates, returning scored matches.
- Connection lookups between two locations with optional via-points, transport-type filters, and pagination.
- Station-board departures and arrivals for a given stop, including real-time information when available.
- Response fields include station IDs and names, coordinates, ISO 8601 departure/arrival times, platforms, transport categories, operators, journey duration, and first/second-class capacity estimates.

The service has no API key requirement and CORS is enabled, so it can be called directly from browser clients. Throughput is bounded by the upstream timetable.search.ch rate limit rather than a documented per-caller quota.

## Try it

**TypeScript**
```bash
npm install transport
```

**Python**
```bash
pip install transport-sdk
```

**PHP**
```bash
composer require voxgig/transport-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/transport-sdk/go
```

**Ruby**
```bash
gem install transport-sdk
```

**Lua**
```bash
luarocks install transport-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { TransportSDK } from 'transport'

const client = new TransportSDK({})

// List all connections
const connections = await client.Connection().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o transport-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "transport": {
      "command": "/abs/path/to/transport-mcp"
    }
  }
}
```

## Entities

The API exposes 3 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Connection** | Journeys between two locations, optionally with via-points and transport-type filters, served from `/connections`. | `/connections` |
| **Location** | Swiss transport stops and places looked up by name or WGS84 coordinates, served from `/locations`. | `/locations` |
| **Stationboard** | Upcoming departures (and arrivals) at a given station, with real-time information when available, served from `/stationboard`. | `/stationboard` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from transport_sdk import TransportSDK

client = TransportSDK({})

# List all connections
connections, err = client.Connection(None).list(None, None)
```

### PHP

```php
<?php
require_once 'transport_sdk.php';

$client = new TransportSDK([]);

// List all connections
[$connections, $err] = $client->Connection(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/transport-sdk/go"

client := sdk.NewTransportSDK(map[string]any{})

// List all connections
connections, err := client.Connection(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "Transport_sdk"

client = TransportSDK.new({})

# List all connections
connections, err = client.Connection(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("transport_sdk")

local client = sdk.new({})

-- List all connections
local connections, err = client:Connection(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = TransportSDK.test()
const result = await client.Connection().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = TransportSDK.test(None, None)
result, err = client.Connection(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = TransportSDK::test(null, null);
[$result, $err] = $client->Connection(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Connection(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = TransportSDK.test(nil, nil)
result, err = client.Connection(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Connection(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Transport API

- Upstream: [https://transport.opendata.ch/](https://transport.opendata.ch/)
- API docs: [https://transport.opendata.ch/docs.html](https://transport.opendata.ch/docs.html)

- Service is provided by [opendata.ch](https://opendata.ch/) with infrastructure donated by [nine.ch](https://nine.ch/).
- Timetable data is sourced from [timetable.search.ch](https://timetable.search.ch/).
- No authentication keys are issued, but request rates are bounded by the upstream timetable.search.ch limits.
- Attribution to opendata.ch (and the underlying data sources) is recommended when redistributing results.

---

Generated from the Transport API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
