

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


describe('ConnectionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRANSPORT_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRANSPORT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TransportSDK.test()
    const ent = testsdk.Connection()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRANSPORT_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'connection.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"connections":{"a":true,"h":"Connections","n":"connections","r":false,"sh":"Found connections","t":"`$ARRAY`","key$":"connections","index$":0},"from":{"a":true,"h":"From","n":"from","r":false,"sh":"Departure station of search","t":"`$ANY`","key$":"from","index$":1},"stations":{"a":true,"h":"Stations","n":"stations","r":false,"sh":"All stations from query","t":"`$ARRAY`","key$":"stations","index$":2},"to":{"a":true,"h":"To","n":"to","r":false,"sh":"Arrival station of search","t":"`$ANY`","key$":"to","index$":3}},"name":"connection","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /connections","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"date","or":"date","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"from","or":"from","r":true,"t":"`$ANY`","index$":1},{"a":true,"k":"query","n":"is_arrival_time","or":"isArrivalTime","r":false,"t":"`$BOOLEAN`","index$":2},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"query","n":"time","or":"time","r":false,"t":"`$ANY`","index$":5},{"a":true,"k":"query","n":"to","or":"to","r":true,"t":"`$ANY`","index$":6},{"a":true,"k":"query","n":"transportation","or":"transportations[]","r":false,"t":"`$ANY`","index$":7},{"a":true,"k":"query","n":"via","or":"via[]","r":false,"t":"`$ANY`","index$":8}]},"k":"http","m":"GET","o":"/connections","q":{"exist":["date","from","is_arrival_time","limit","page","time","to","transportation","via"]},"r":{},"s":[{"lit":"connections"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"connection","name__orig":"connection","Name":"Connection","name_":"connection","name-":"connection","NAME":"CONNECTION","index$":0}, {"active":true,"entity":"connection","key$":"BasicConnectionFlow","kind":"basic","name":"BasicConnectionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"connection_ref01"}}],"index$":0}]}, 'Connection', {"GET /connections":{"protocol":"http","parameters":[{"name":"from","in":"query","description":"Specifies the departure location of the connection (e.g. Lausanne)","required":true,"type":"string","index$":0},{"name":"to","in":"query","description":"Specifies the arrival location of the connection (e.g. Genève)","required":true,"type":"string","index$":1},{"name":"via[]","in":"query","description":"Specifies up to five via locations. When specifying several vias, array notation (via[]=Bern&via[]=Fribourg) is required","type":"string","index$":2},{"name":"date","in":"query","description":"Date of the connection, in the format YYYY-MM-DD (e.g. 2012-03-25)","type":"string","index$":3},{"name":"time","in":"query","description":"Time of the connection, in the format hh:mm (e.g. 17:30)","type":"string","index$":4},{"name":"isArrivalTime","in":"query","description":"defaults to `0`, if set to `1` the passed `date` and `time` is the arrival time","type":"integer","index$":5},{"name":"transportations[]","in":"query","description":"Transportation means; one or more of `train`, `tram`, `ship`, `bus`, `cableway` (e.g. transportations[]=tram&transportations[]=bus)","type":"string","index$":6},{"name":"limit","in":"query","description":"1 - 6. Specifies the number of connections to return. If several connections depart at the same time they are counted as 1.","type":"integer","index$":7},{"name":"page","in":"query","description":"0 - 10. Allows pagination of connections. Zero-based, so first page is 0, second is 1, third is 2 and so on.","type":"integer","index$":8}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let connection_ref01_data = Object.values(setup.data.existing.connection)[0] as any

    // LIST
    const connection_ref01_ent = client.Connection()
    const connection_ref01_match: any = {}

    const connection_ref01_list = (await connection_ref01_ent.list(connection_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/connection/ConnectionTestData.json')

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
    ['connection01','connection02','connection03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRANSPORT_TEST_CONNECTION_ENTID': idmap,
    'TRANSPORT_TEST_LIVE': 'FALSE',
    'TRANSPORT_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['TRANSPORT_TEST_CONNECTION_ENTID']

  const live = 'TRUE' === env.TRANSPORT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRANSPORT_TEST_CONNECTION_ENTID']
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
  
