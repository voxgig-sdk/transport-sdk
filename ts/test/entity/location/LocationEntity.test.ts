

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"coordinate":{"a":true,"h":"Coordinate","n":"coordinate","r":false,"sh":"The location coordinates.","t":"`$ANY`","key$":"coordinate","index$":0},"distance":{"a":true,"fo":"float","h":"Distance","n":"distance","r":false,"sh":"If search has been with coordinates, distance to original point in meters.","t":"`$NUMBER`","key$":"distance","index$":1},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The name of this location.","t":"`$STRING`","key$":"name","index$":2},"score":{"a":true,"h":"Score","n":"score","r":false,"sh":"The score with regard to the search request, the higher the better.","t":"`$INTEGER`","key$":"score","index$":3}},"name":"location","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /locations","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"query","or":"query","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"type","or":"type","r":false,"t":"`$ANY`","index$":1},{"a":true,"k":"query","n":"x","or":"x","r":false,"t":"`$ANY`","index$":2},{"a":true,"k":"query","n":"y","or":"y","r":false,"t":"`$ANY`","index$":3}]},"k":"http","m":"GET","o":"/locations","q":{"exist":["query","type","x","y"]},"r":{},"s":[{"lit":"locations"}],"t":{"req":"`reqdata`","res":"`body.stations`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"location","name__orig":"location","Name":"Location","name_":"location","name-":"location","NAME":"LOCATION","index$":1}, {"active":true,"entity":"location","key$":"BasicLocationFlow","kind":"basic","name":"BasicLocationFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"location_ref01"}}],"index$":0}]}, 'Location', {"GET /locations":{"protocol":"http","parameters":[{"name":"query","in":"query","description":"Specifies the location name to search for (e.g. Basel)","type":"string","index$":0},{"name":"x","in":"query","description":"Latitude (e.g. 47.476001)","type":"number","index$":1},{"name":"y","in":"query","description":"Longitude (e.g. 8.306130)","type":"number","index$":2},{"name":"type","in":"query","description":"Only with `query` parameter. Specifies the location type, possible types are:<ul><li>`all` (default): Looks up for all types of locations</li><li>`station`: Looks up for stations (train station, bus station)</li><li>`poi`: Looks up for points of interest (Clock tower, China garden)</li><li>`address`: Looks up for an address (Zurich Bahnhofstrasse 33)</li></ul>","type":"string","index$":3}]}})
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
  
