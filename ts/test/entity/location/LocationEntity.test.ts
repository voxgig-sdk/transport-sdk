

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { TransportSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('LocationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRANSPORT_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRANSPORT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TransportSDK.test()
    const ent = testsdk.Location()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRANSPORT_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'location.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"coordinate","req":false,"short":"The location coordinates.","type":"`$ANY`","index$":0},{"active":true,"format":"float","name":"distance","req":false,"short":"If search has been with coordinates, distance to original point in meters.","type":"`$NUMBER`","index$":1},{"active":true,"name":"name","req":false,"short":"The name of this location.","type":"`$STRING`","index$":2},{"active":true,"name":"score","req":false,"short":"The score with regard to the search request, the higher the better.","type":"`$INTEGER`","index$":3}],"name":"location","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"query","orig":"query","reqd":false,"type":"`$ANY`","index$":0},{"active":true,"kind":"query","name":"type","orig":"type","reqd":false,"type":"`$ANY`","index$":1},{"active":true,"kind":"query","name":"x","orig":"x","reqd":false,"type":"`$ANY`","index$":2},{"active":true,"kind":"query","name":"y","orig":"y","reqd":false,"type":"`$ANY`","index$":3}]},"contract":{"id":"GET /locations","json":"{\"parameters\":[{\"description\":\"Specifies the location name to search for (e.g. Basel)\",\"in\":\"query\",\"name\":\"query\",\"type\":\"string\"},{\"description\":\"Latitude (e.g. 47.476001)\",\"in\":\"query\",\"name\":\"x\",\"type\":\"number\"},{\"description\":\"Longitude (e.g. 8.306130)\",\"in\":\"query\",\"name\":\"y\",\"type\":\"number\"},{\"description\":\"Only with `query` parameter. Specifies the location type, possible types are:<ul><li>`all` (default): Looks up for all types of locations</li><li>`station`: Looks up for stations (train station, bus station)</li><li>`poi`: Looks up for points of interest (Clock tower, China garden)</li><li>`address`: Looks up for an address (Zurich Bahnhofstrasse 33)</li></ul>\",\"in\":\"query\",\"name\":\"type\",\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"List of locations\",\"schema\":{\"properties\":{\"stations\":{\"description\":\"Search locations.\\n\\nReturns the matching locations for the given parameters. Either query or ( x and y ) are required.\\n\\nThe locations in the response are scored to determine which is the most exact location.\\n\\nThis method can return a refine response, what means that the request has to be redone.\",\"items\":{\"properties\":{\"coordinate\":{\"description\":\"The location coordinates.\",\"properties\":{\"type\":{\"description\":\"The type of the given coordinate.\",\"type\":\"string\"},\"x\":{\"description\":\"Latitude.\",\"format\":\"float\",\"type\":\"number\"},\"y\":{\"description\":\"Longitude.\",\"format\":\"float\",\"type\":\"number\"}}},\"distance\":{\"description\":\"If search has been with coordinates, distance to original point in meters.\",\"format\":\"float\",\"type\":\"number\"},\"name\":{\"description\":\"The name of this location.\",\"type\":\"string\"},\"score\":{\"description\":\"The score with regard to the search request, the higher the better.\",\"type\":\"integer\"}}},\"type\":\"array\"}},\"type\":\"object\"}}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/locations","segments":[{"lit":"locations"}],"select":{"exist":["query","type","x","y"]},"transform":{"req":"`reqdata`","res":"`body.stations`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"location","name__orig":"location","Name":"Location","name_":"location","name-":"location","NAME":"LOCATION","index$":1}, {"active":true,"entity":"location","key$":"BasicLocationFlow","kind":"basic","name":"BasicLocationFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"location_ref01"}}],"index$":0}]}, 'Location')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let location_ref01_data = Object.values(setup.data.existing.location)[0] as any

    // LIST
    const location_ref01_ent = client.Location()
    const location_ref01_match: any = {}

    const location_ref01_list = (await location_ref01_ent.list(location_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/location/LocationTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = TransportSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['location01','location02','location03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRANSPORT_TEST_LOCATION_ENTID': idmap,
    'TRANSPORT_TEST_LIVE': 'FALSE',
    'TRANSPORT_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['TRANSPORT_TEST_LOCATION_ENTID']

  const live = 'TRUE' === env.TRANSPORT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRANSPORT_TEST_LOCATION_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new TransportSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.TRANSPORT_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
