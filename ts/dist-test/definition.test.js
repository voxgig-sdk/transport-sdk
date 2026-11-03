"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "connection",
        "accessor": "Connection",
        "op": "list",
        "method": "GET",
        "path": "/connections",
        "args": [],
        "select": {
            "from": "Lausanne",
            "to": "Genève",
            "date": "v1",
            "is_arrival_time": "v1",
            "limit": "v1",
            "page": "v1",
            "time": "v1",
            "transportation": "v1",
            "via": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "from",
            "to",
            "via[]",
            "date",
            "time",
            "isArrivalTime",
            "transportations[]",
            "limit",
            "page"
        ],
        "queryArgs": [
            {
                "name": "date",
                "wire": "date"
            },
            {
                "name": "from",
                "wire": "from"
            },
            {
                "name": "is_arrival_time",
                "wire": "isArrivalTime"
            },
            {
                "name": "limit",
                "wire": "limit"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "time",
                "wire": "time"
            },
            {
                "name": "to",
                "wire": "to"
            },
            {
                "name": "transportation",
                "wire": "transportations[]"
            },
            {
                "name": "via",
                "wire": "via[]"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "connections": [
                {
                    "from": {
                        "station": {
                            "id": "x",
                            "name": "x",
                            "score": 1,
                            "coordinate": {
                                "type": "x",
                                "x": 1,
                                "y": 1
                            },
                            "distance": 1
                        },
                        "arrival": "x",
                        "arrivalTimestamp": 1,
                        "departure": "x",
                        "departureTimestamp": 1,
                        "delay": 1,
                        "platform": "x",
                        "prognosis": {
                            "platform": "x",
                            "arrival": "x",
                            "departure": "x",
                            "capacity1st": 1,
                            "capacity2nd": 1
                        },
                        "realtimeAvailability": "x",
                        "location": {
                            "name": "x",
                            "score": 1,
                            "coordinate": {
                                "type": "x",
                                "x": 1,
                                "y": 1
                            },
                            "distance": 1
                        }
                    },
                    "to": {
                        "station": {
                            "id": "x",
                            "name": "x",
                            "score": 1,
                            "coordinate": {
                                "type": "x",
                                "x": 1,
                                "y": 1
                            },
                            "distance": 1
                        },
                        "arrival": "x",
                        "arrivalTimestamp": 1,
                        "departure": "x",
                        "departureTimestamp": 1,
                        "delay": 1,
                        "platform": "x",
                        "prognosis": {
                            "platform": "x",
                            "arrival": "x",
                            "departure": "x",
                            "capacity1st": 1,
                            "capacity2nd": 1
                        },
                        "realtimeAvailability": "x",
                        "location": {
                            "name": "x",
                            "score": 1,
                            "coordinate": {
                                "type": "x",
                                "x": 1,
                                "y": 1
                            },
                            "distance": 1
                        }
                    },
                    "duration": "x",
                    "transfers": 1,
                    "service": {
                        "regular": "x",
                        "irregular": "x"
                    },
                    "products": [
                        "x"
                    ],
                    "capacity1st": 1,
                    "capacity2nd": 1,
                    "sections": [
                        {
                            "journey": {
                                "name": "x",
                                "category": "x",
                                "subcategory": "x",
                                "categoryCode": 1,
                                "number": "x",
                                "operator": "x",
                                "to": "x",
                                "passList": [],
                                "capacity1st": 1,
                                "capacity2nd": 1
                            },
                            "walk": {
                                "duration": "x"
                            },
                            "departure": {
                                "station": {},
                                "arrival": "x",
                                "arrivalTimestamp": 1,
                                "departure": "x",
                                "departureTimestamp": 1,
                                "delay": 1,
                                "platform": "x",
                                "prognosis": {},
                                "realtimeAvailability": "x",
                                "location": {}
                            },
                            "arrival": {
                                "station": {},
                                "arrival": "x",
                                "arrivalTimestamp": 1,
                                "departure": "x",
                                "departureTimestamp": 1,
                                "delay": 1,
                                "platform": "x",
                                "prognosis": {},
                                "realtimeAvailability": "x",
                                "location": {}
                            }
                        }
                    ]
                }
            ],
            "from": {
                "id": "x",
                "name": "x",
                "score": 1,
                "coordinate": {
                    "type": "x",
                    "x": 1,
                    "y": 1
                },
                "distance": 1
            },
            "to": {
                "id": "x",
                "name": "x",
                "score": 1,
                "coordinate": {
                    "type": "x",
                    "x": 1,
                    "y": 1
                },
                "distance": 1
            },
            "stations": [
                {
                    "id": "x",
                    "name": "x",
                    "score": 1,
                    "coordinate": {
                        "type": "x",
                        "x": 1,
                        "y": 1
                    },
                    "distance": 1
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "location",
        "accessor": "Location",
        "op": "list",
        "method": "GET",
        "path": "/locations",
        "args": [],
        "select": {
            "query": "v1",
            "type": "v1",
            "x": "v1",
            "y": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "query",
            "x",
            "y",
            "type"
        ],
        "queryArgs": [
            {
                "name": "query",
                "wire": "query"
            },
            {
                "name": "type",
                "wire": "type"
            },
            {
                "name": "x",
                "wire": "x"
            },
            {
                "name": "y",
                "wire": "y"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "stations": [
                {
                    "name": "x",
                    "score": 1,
                    "coordinate": {
                        "type": "x",
                        "x": 1,
                        "y": 1
                    },
                    "distance": 1
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "stationboard",
        "accessor": "Stationboard",
        "op": "list",
        "method": "GET",
        "path": "/stationboard",
        "args": [],
        "select": {
            "station": "Aarau",
            "datetime": "v1",
            "id": "v1",
            "limit": "v1",
            "transportation": "v1",
            "type": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "station",
            "id",
            "limit",
            "transportations[]",
            "datetime",
            "type"
        ],
        "queryArgs": [
            {
                "name": "datetime",
                "wire": "datetime"
            },
            {
                "name": "id",
                "wire": "id"
            },
            {
                "name": "limit",
                "wire": "limit"
            },
            {
                "name": "station",
                "wire": "station"
            },
            {
                "name": "transportation",
                "wire": "transportations[]"
            },
            {
                "name": "type",
                "wire": "type"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "station": {
                "id": "x",
                "name": "x",
                "score": 1,
                "coordinate": {
                    "type": "x",
                    "x": 1,
                    "y": 1
                },
                "distance": 1
            },
            "stationboard": [
                {
                    "name": "x",
                    "category": "x",
                    "subcategory": "x",
                    "categoryCode": 1,
                    "number": "x",
                    "operator": "x",
                    "to": "x",
                    "passList": [
                        {
                            "station": {
                                "id": "x",
                                "name": "x",
                                "score": 1,
                                "coordinate": {},
                                "distance": 1
                            },
                            "arrival": "x",
                            "arrivalTimestamp": 1,
                            "departure": "x",
                            "departureTimestamp": 1,
                            "delay": 1,
                            "platform": "x",
                            "prognosis": {
                                "platform": "x",
                                "arrival": "x",
                                "departure": "x",
                                "capacity1st": 1,
                                "capacity2nd": 1
                            },
                            "realtimeAvailability": "x",
                            "location": {
                                "name": "x",
                                "score": 1,
                                "coordinate": {},
                                "distance": 1
                            }
                        }
                    ],
                    "capacity1st": 1,
                    "capacity2nd": 1
                }
            ]
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map