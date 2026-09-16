"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('StationboardEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TRANSPORT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TRANSPORT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TransportSDK.test();
        const ent = testsdk.Stationboard();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TRANSPORT_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'stationboard.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "capacity1st", "req": false, "short": "The maximum estimated occupation load of 1st class coaches (e.g.", "type": "`$INTEGER`", "index$": 0 }, { "active": true, "name": "capacity2nd", "req": false, "short": "The maximum estimated occupation load of 2nd class coaches (e.g.", "type": "`$INTEGER`", "index$": 1 }, { "active": true, "name": "category", "req": false, "short": "The type of connection this is (e.g.", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "categoryCode", "req": false, "short": "An internal category code, indicates the type of the public transport vehicle.", "type": "`$INTEGER`", "index$": 3 }, { "active": true, "name": "name", "req": false, "short": "The name of the connection (e.g.", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "number", "req": false, "short": "The number of the connection's line (e.g.", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "operator", "req": false, "short": "The operator of the connection's line (e.g.", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "passList", "req": false, "short": "Checkpoints the train passed on the journey.", "type": "`$ARRAY`", "index$": 7 }, { "active": true, "name": "subcategory", "req": false, "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "to", "req": false, "short": "The final destination of this line (e.g.", "type": "`$STRING`", "index$": 9 }], "name": "stationboard", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "datetime", "orig": "datetime", "reqd": false, "type": "`$ANY`", "index$": 0 }, { "active": true, "kind": "query", "name": "id", "orig": "id", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "query", "name": "limit", "orig": "limit", "reqd": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "kind": "query", "name": "station", "orig": "station", "reqd": true, "type": "`$ANY`", "index$": 3 }, { "active": true, "kind": "query", "name": "transportation", "orig": "transportation", "reqd": false, "type": "`$ANY`", "index$": 4 }, { "active": true, "kind": "query", "name": "type", "orig": "type", "reqd": false, "type": "`$ANY`", "index$": 5 }] }, "contract": { "id": "GET /stationboard", "json": "{\"parameters\":[{\"description\":\"Specifies the location of which a stationboard should be returned (e.g. Aarau)\",\"in\":\"query\",\"name\":\"station\",\"required\":true,\"type\":\"string\"},{\"description\":\"The id of the station whose stationboard should be returned. Alternative to the station parameter; one of these two is required. If both an id and a station are specified the id has precedence. e.g. 8503059 (for Zurich Stadelhofen)\",\"in\":\"query\",\"name\":\"id\",\"type\":\"string\"},{\"description\":\"Number of departing connections to return. This is not a hard limit - if multiple connections leave at the same time it'll return any connections that leave at the same time as the last connection within the limit. For example: `limit=4` will return connections leaving at: 19:30, 19:32, 19:32, 19:35, 19:35. Because one of the connections leaving at 19:35 is within the limit, all connections leaving at 19:35 are shown.\",\"in\":\"query\",\"name\":\"limit\",\"type\":\"integer\"},{\"description\":\"Transportation means; one or more of `train`, `tram`, `ship`, `bus`, `cableway` (e.g. transportations[]=tram&transportations[]=bus)\",\"in\":\"query\",\"name\":\"transportations[]\",\"type\":\"string\"},{\"description\":\"Date and time of departing connections, in the format `YYYY-MM-DD hh:mm` (e.g. 2012-03-25 17:30)\",\"in\":\"query\",\"name\":\"datetime\",\"type\":\"string\"},{\"description\":\"`departure` (default) or `arrival`\",\"in\":\"query\",\"name\":\"type\",\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Stationboard\",\"schema\":{\"properties\":{\"station\":{\"description\":\"The first matched location based on the query. The stationboard will be displayed if this is a station.\",\"properties\":{\"coordinate\":{\"description\":\"The location coordinates.\",\"properties\":{\"type\":{\"description\":\"The type of the given coordinate.\",\"type\":\"string\"},\"x\":{\"description\":\"Latitude.\",\"format\":\"float\",\"type\":\"number\"},\"y\":{\"description\":\"Longitude.\",\"format\":\"float\",\"type\":\"number\"}}},\"distance\":{\"description\":\"If search has been with coordinates, distance to original point in meters.\",\"format\":\"float\",\"type\":\"number\"},\"id\":{\"description\":\"The ID of the station.\",\"type\":\"string\"},\"name\":{\"description\":\"The name of this location.\",\"type\":\"string\"},\"score\":{\"description\":\"The score with regard to the search request, the higher the better.\",\"type\":\"integer\"}}},\"stationboard\":{\"description\":\"A list of journeys with the stop of the line leaving from that station.\",\"items\":{\"properties\":{\"capacity1st\":{\"description\":\"The maximum estimated occupation load of 1st class coaches (e.g. 1).\",\"type\":\"integer\"},\"capacity2nd\":{\"description\":\"The maximum estimated occupation load of 2nd class coaches (e.g. 2).\",\"type\":\"integer\"},\"category\":{\"description\":\"The type of connection this is (e.g. S).\",\"type\":\"string\"},\"categoryCode\":{\"description\":\"An internal category code, indicates the type of the public transport vehicle. Possible values are 0, 1, 2, 3, 5, 8: train; 4: ship; 6: bus; 7: cable car (aerial, big); 9: tram.\",\"type\":\"integer\"},\"name\":{\"description\":\"The name of the connection (e.g. 019351).\",\"type\":\"string\"},\"number\":{\"description\":\"The number of the connection's line (e.g. 13).\",\"type\":\"string\"},\"operator\":{\"description\":\"The operator of the connection's line (e.g. BBA).\",\"type\":\"string\"},\"passList\":{\"description\":\"Checkpoints the train passed on the journey.\",\"items\":{\"properties\":{\"arrival\":{\"description\":\"The arrival time to the checkpoint (e.g. 14:58:00).\",\"type\":\"string\"},\"arrivalTimestamp\":{\"type\":\"integer\"},\"delay\":{\"type\":\"integer\"},\"departure\":{\"description\":\"The departure time from the checkpoint, can be null.\",\"type\":\"string\"},\"departureTimestamp\":{\"type\":\"integer\"},\"location\":{\"properties\":{\"coordinate\":{\"description\":\"The location coordinates.\",\"properties\":{\"type\":{\"description\":\"The type of the given coordinate.\",\"type\":\"string\"},\"x\":{\"description\":\"Latitude.\",\"format\":\"float\",\"type\":\"number\"},\"y\":{\"description\":\"Longitude.\",\"format\":\"float\",\"type\":\"number\"}}},\"distance\":{\"description\":\"If search has been with coordinates, distance to original point in meters.\",\"format\":\"float\",\"type\":\"number\"},\"name\":{\"description\":\"The name of this location.\",\"type\":\"string\"},\"score\":{\"description\":\"The score with regard to the search request, the higher the better.\",\"type\":\"integer\"}}},\"platform\":{\"description\":\"The arrival/departure platform (e.g. 8).\",\"type\":\"string\"},\"prognosis\":{\"description\":\"The checkpoint prognosis.\",\"properties\":{\"arrival\":{\"description\":\"The departure time prognosis to the checkpoint, date format: [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) (e.g. 2012-03-31T08:58:00+02:00).\",\"type\":\"string\"},\"capacity1st\":{\"description\":\"The estimated occupation load of 1st class coaches (e.g. 1).\",\"type\":\"integer\"},\"capacity2nd\":{\"description\":\"The estimated occupation load of 2nd class coaches (e.g. 2).\",\"type\":\"integer\"},\"departure\":{\"description\":\"The arrival time prognosis to the checkpoint, date format: [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) (e.g. 2012-03-31T09:35:00+02:00).\",\"type\":\"string\"},\"platform\":{\"description\":\"The estimated arrival/departure platform (e.g. 8).\",\"type\":\"string\"}}},\"realtimeAvailability\":{\"type\":\"string\"},\"station\":{\"description\":\"A location object showing this line's stop at the requested station.\",\"properties\":{\"coordinate\":{\"description\":\"The location coordinates.\",\"properties\":{\"type\":{\"description\":\"The type of the given coordinate.\",\"type\":\"string\"},\"x\":{\"description\":\"Latitude.\",\"format\":\"float\",\"type\":\"number\"},\"y\":{\"description\":\"Longitude.\",\"format\":\"float\",\"type\":\"number\"}}},\"distance\":{\"description\":\"If search has been with coordinates, distance to original point in meters.\",\"format\":\"float\",\"type\":\"number\"},\"id\":{\"description\":\"The ID of the station.\",\"type\":\"string\"},\"name\":{\"description\":\"The name of this location.\",\"type\":\"string\"},\"score\":{\"description\":\"The score with regard to the search request, the higher the better.\",\"type\":\"integer\"}}}}},\"type\":\"array\"},\"subcategory\":{\"type\":\"string\"},\"to\":{\"description\":\"The final destination of this line (e.g. Aarau Rohr, Unterdorf).\",\"type\":\"string\"}}},\"type\":\"array\"}},\"type\":\"object\"}}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/stationboard", "segments": [{ "lit": "stationboard" }], "select": { "exist": ["datetime", "id", "limit", "station", "transportation", "type"] }, "transform": { "req": "`reqdata`", "res": "`body.stationboard`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "stationboard", "name__orig": "stationboard", "Name": "Stationboard", "name_": "stationboard", "name-": "stationboard", "NAME": "STATIONBOARD", "index$": 2 }, { "active": true, "entity": "stationboard", "key$": "BasicStationboardFlow", "kind": "basic", "name": "BasicStationboardFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "stationboard_ref01" } }], "index$": 0 }] }, 'Stationboard');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let stationboard_ref01_data = Object.values(setup.data.existing.stationboard)[0];
        // LIST
        const stationboard_ref01_ent = client.Stationboard();
        const stationboard_ref01_match = {};
        const stationboard_ref01_list = (await stationboard_ref01_ent.list(stationboard_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/stationboard/StationboardTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TransportSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['stationboard01', 'stationboard02', 'stationboard03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TRANSPORT_TEST_STATIONBOARD_ENTID': idmap,
        'TRANSPORT_TEST_LIVE': 'FALSE',
        'TRANSPORT_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['TRANSPORT_TEST_STATIONBOARD_ENTID'];
    const live = 'TRUE' === env.TRANSPORT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TRANSPORT_TEST_STATIONBOARD_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.TransportSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=StationboardEntity.test.js.map