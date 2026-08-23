# Transport TypeScript SDK



The TypeScript SDK for the Transport API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Connection()` — each with a small set of operations (`list`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/transport-sdk/releases](https://github.com/voxgig-sdk/transport-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { TransportSDK } from '@voxgig-sdk/transport'

const client = new TransportSDK()
```

### 2. List connection records

`list()` resolves to an array of Connection ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

```ts
const connections = await client.Connection().list()

for (const connection of connections) {
  console.log(connection)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const connections = await client.Connection().list()
  console.log(connections)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = TransportSDK.test()

const connection = await client.Connection().list()
// connection is the entity, populated with mock response data
// — call connection.data() for the record itself
console.log(connection)
```

You can also use the instance method:

```ts
const client = new TransportSDK()
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Connection()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new TransportSDK({
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
TRANSPORT_TEST_LIVE=TRUE
```

Then run:

```bash
cd ts && npm test
```


## Reference

### TransportSDK

#### Constructor

```ts
new TransportSDK(options?: {
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Connection(data?)` | `ConnectionEntity` | Create a Connection entity instance. |
| `Location(data?)` | `LocationEntity` | Create a Location entity instance. |
| `Stationboard(data?)` | `StationboardEntity` | Create a Stationboard entity instance. |
| `tester(testopts?, sdkopts?)` | `TransportSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `TransportSDK.test(testopts?, sdkopts?)` | `TransportSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): TransportSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Connection

| Field | Description |
| --- | --- |
| `connections` | Found connections |
| `from` | Departure station of search |
| `stations` | All stations from query |
| `to` | Arrival station of search |

Operations: list.

API path: `/connections`

#### Location

| Field | Description |
| --- | --- |
| `coordinate` | The location coordinates. |
| `distance` | If search has been with coordinates, distance to original point in meters. |
| `name` | The name of this location. |
| `score` | The score with regard to the search request, the higher the better. |

Operations: list.

API path: `/locations`

#### Stationboard

| Field | Description |
| --- | --- |
| `capacity1st` | The maximum estimated occupation load of 1st class coaches (e.g. |
| `capacity2nd` | The maximum estimated occupation load of 2nd class coaches (e.g. |
| `category` | The type of connection this is (e.g. |
| `categoryCode` | An internal category code, indicates the type of the public transport vehicle. |
| `name` | The name of the connection (e.g. |
| `number` | The number of the connection's line (e.g. |
| `operator` | The operator of the connection's line (e.g. |
| `passList` | Checkpoints the train passed on the journey. |
| `subcategory` |  |
| `to` | The final destination of this line (e.g. |

Operations: list.

API path: `/stationboard`



## Entities


### Connection

Create an instance: `const connection = client.Connection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `connections` | `any[]` | Found connections |
| `from` | `any` | Departure station of search |
| `stations` | `any[]` | All stations from query |
| `to` | `any` | Arrival station of search |

#### Example: List

```ts
const connections = await client.Connection().list()
```


### Location

Create an instance: `const location = client.Location()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coordinate` | `any` | The location coordinates. |
| `distance` | `number` | If search has been with coordinates, distance to original point in meters. |
| `name` | `string` | The name of this location. |
| `score` | `number` | The score with regard to the search request, the higher the better. |

#### Example: List

```ts
const locations = await client.Location().list()
```


### Stationboard

Create an instance: `const stationboard = client.Stationboard()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `capacity1st` | `number` | The maximum estimated occupation load of 1st class coaches (e.g. |
| `capacity2nd` | `number` | The maximum estimated occupation load of 2nd class coaches (e.g. |
| `category` | `string` | The type of connection this is (e.g. |
| `categoryCode` | `number` | An internal category code, indicates the type of the public transport vehicle. |
| `name` | `string` | The name of the connection (e.g. |
| `number` | `string` | The number of the connection's line (e.g. |
| `operator` | `string` | The operator of the connection's line (e.g. |
| `passList` | `any[]` | Checkpoints the train passed on the journey. |
| `subcategory` | `string` |  |
| `to` | `string` | The final destination of this line (e.g. |

#### Example: List

```ts
const stationboards = await client.Stationboard().list()
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
transport/
├── src/
│   ├── TransportSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { TransportSDK } from '@voxgig-sdk/transport'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const connection = client.Connection()
await connection.list()

// connection.data() now returns the connection data from the last `list`
// connection.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
