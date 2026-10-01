

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


describe('StationboardEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRANSPORT_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRANSPORT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TransportSDK.test()
    const ent = testsdk.Stationboard()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRANSPORT_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'stationboard.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"capacity1st":{"a":true,"h":"Capacity1st","n":"capacity1st","r":false,"sh":"The maximum estimated occupation load of 1st class coaches (e.g.","t":"`$INTEGER`","key$":"capacity1st","index$":0},"capacity2nd":{"a":true,"h":"Capacity2nd","n":"capacity2nd","r":false,"sh":"The maximum estimated occupation load of 2nd class coaches (e.g.","t":"`$INTEGER`","key$":"capacity2nd","index$":1},"category":{"a":true,"h":"Category","n":"category","r":false,"sh":"The type of connection this is (e.g.","t":"`$STRING`","key$":"category","index$":2},"categoryCode":{"a":true,"h":"Category Code","n":"categoryCode","r":false,"sh":"An internal category code, indicates the type of the public transport vehicle.","t":"`$INTEGER`","key$":"categoryCode","index$":3},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The name of the connection (e.g.","t":"`$STRING`","key$":"name","index$":4},"number":{"a":true,"h":"Number","n":"number","r":false,"sh":"The number of the connection's line (e.g.","t":"`$STRING`","key$":"number","index$":5},"operator":{"a":true,"h":"Operator","n":"operator","r":false,"sh":"The operator of the connection's line (e.g.","t":"`$STRING`","key$":"operator","index$":6},"passList":{"a":true,"h":"Pass List","n":"passList","r":false,"sh":"Checkpoints the train passed on the journey.","t":"`$ARRAY`","key$":"passList","index$":7},"subcategory":{"a":true,"h":"Subcategory","n":"subcategory","r":false,"t":"`$STRING`","key$":"subcategory","index$":8},"to":{"a":true,"h":"To","n":"to","r":false,"sh":"The final destination of this line (e.g.","t":"`$STRING`","key$":"to","index$":9}},"name":"stationboard","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /stationboard","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"datetime","or":"datetime","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"id","or":"id","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"station","or":"station","r":true,"t":"`$ANY`","index$":3},{"a":true,"k":"query","n":"transportation","or":"transportations[]","r":false,"t":"`$ANY`","index$":4},{"a":true,"k":"query","n":"type","or":"type","r":false,"t":"`$ANY`","index$":5}]},"k":"http","m":"GET","o":"/stationboard","q":{"exist":["datetime","id","limit","station","transportation","type"]},"r":{},"s":[{"lit":"stationboard"}],"t":{"req":"`reqdata`","res":"`body.stationboard`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"stationboard","name__orig":"stationboard","Name":"Stationboard","name_":"stationboard","name-":"stationboard","NAME":"STATIONBOARD","index$":2}, {"active":true,"entity":"stationboard","key$":"BasicStationboardFlow","kind":"basic","name":"BasicStationboardFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"stationboard_ref01"}}],"index$":0}]}, 'Stationboard', {"GET /stationboard":{"protocol":"http","parameters":[{"name":"station","in":"query","description":"Specifies the location of which a stationboard should be returned (e.g. Aarau)","required":true,"type":"string","index$":0},{"name":"id","in":"query","description":"The id of the station whose stationboard should be returned. Alternative to the station parameter; one of these two is required. If both an id and a station are specified the id has precedence. e.g. 8503059 (for Zurich Stadelhofen)","type":"string","index$":1},{"name":"limit","in":"query","description":"Number of departing connections to return. This is not a hard limit - if multiple connections leave at the same time it'll return any connections that leave at the same time as the last connection within the limit. For example: `limit=4` will return connections leaving at: 19:30, 19:32, 19:32, 19:35, 19:35. Because one of the connections leaving at 19:35 is within the limit, all connections leaving at 19:35 are shown.","type":"integer","index$":2},{"name":"transportations[]","in":"query","description":"Transportation means; one or more of `train`, `tram`, `ship`, `bus`, `cableway` (e.g. transportations[]=tram&transportations[]=bus)","type":"string","index$":3},{"name":"datetime","in":"query","description":"Date and time of departing connections, in the format `YYYY-MM-DD hh:mm` (e.g. 2012-03-25 17:30)","type":"string","index$":4},{"name":"type","in":"query","description":"`departure` (default) or `arrival`","type":"string","index$":5}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let stationboard_ref01_data = Object.values(setup.data.existing.stationboard)[0] as any

    // LIST
    const stationboard_ref01_ent = client.Stationboard()
    const stationboard_ref01_match: any = {}

    const stationboard_ref01_list = (await stationboard_ref01_ent.list(stationboard_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/stationboard/StationboardTestData.json')

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
    ['stationboard01','stationboard02','stationboard03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRANSPORT_TEST_STATIONBOARD_ENTID': idmap,
    'TRANSPORT_TEST_LIVE': 'FALSE',
    'TRANSPORT_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['TRANSPORT_TEST_STATIONBOARD_ENTID']

  const live = 'TRUE' === env.TRANSPORT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRANSPORT_TEST_STATIONBOARD_ENTID']
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
  
