import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "connection",
    "accessor": "Connection",
    "op": "list",
    "method": "GET",
    "path": "/connections",
    "args": [],
    "select": {
      "date": "v1",
      "from": "v1",
      "is_arrival_time": "v1",
      "limit": "v1",
      "page": "v1",
      "time": "v1",
      "to": "v1",
      "transportation": "v1",
      "via": "v1"
    },
    "headers": [],
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
    "auth": null,
    "status": 200,
    "sample": {
      "connections": [
        {
          "capacity1st": 1,
          "capacity2nd": 1,
          "duration": "x",
          "from": {
            "arrival": "x",
            "arrivalTimestamp": 1,
            "delay": 1,
            "departure": "x",
            "departureTimestamp": 1,
            "location": {
              "coordinate": {
                "type": "x",
                "x": 1,
                "y": 1
              },
              "distance": 1,
              "name": "x",
              "score": 1
            },
            "platform": "x",
            "prognosis": {
              "arrival": "x",
              "capacity1st": 1,
              "capacity2nd": 1,
              "departure": "x",
              "platform": "x"
            },
            "realtimeAvailability": "x",
            "station": {
              "coordinate": {
                "type": "x",
                "x": 1,
                "y": 1
              },
              "distance": 1,
              "id": "x",
              "name": "x",
              "score": 1
            }
          },
          "products": [
            "x"
          ],
          "sections": [
            {
              "arrival": {
                "arrival": "x",
                "arrivalTimestamp": 1,
                "delay": 1,
                "departure": "x",
                "departureTimestamp": 1,
                "location": {},
                "platform": "x",
                "prognosis": {},
                "realtimeAvailability": "x",
                "station": {}
              },
              "departure": {
                "arrival": "x",
                "arrivalTimestamp": 1,
                "delay": 1,
                "departure": "x",
                "departureTimestamp": 1,
                "location": {},
                "platform": "x",
                "prognosis": {},
                "realtimeAvailability": "x",
                "station": {}
              },
              "journey": {
                "capacity1st": 1,
                "capacity2nd": 1,
                "category": "x",
                "categoryCode": 1,
                "name": "x",
                "number": "x",
                "operator": "x",
                "passList": [],
                "subcategory": "x",
                "to": "x"
              },
              "walk": {
                "duration": "x"
              }
            }
          ],
          "service": {
            "irregular": "x",
            "regular": "x"
          },
          "to": {
            "arrival": "x",
            "arrivalTimestamp": 1,
            "delay": 1,
            "departure": "x",
            "departureTimestamp": 1,
            "location": {
              "coordinate": {
                "type": "x",
                "x": 1,
                "y": 1
              },
              "distance": 1,
              "name": "x",
              "score": 1
            },
            "platform": "x",
            "prognosis": {
              "arrival": "x",
              "capacity1st": 1,
              "capacity2nd": 1,
              "departure": "x",
              "platform": "x"
            },
            "realtimeAvailability": "x",
            "station": {
              "coordinate": {
                "type": "x",
                "x": 1,
                "y": 1
              },
              "distance": 1,
              "id": "x",
              "name": "x",
              "score": 1
            }
          },
          "transfers": 1
        }
      ],
      "from": {
        "coordinate": {
          "type": "x",
          "x": 1,
          "y": 1
        },
        "distance": 1,
        "id": "x",
        "name": "x",
        "score": 1
      },
      "to": {
        "coordinate": {
          "type": "x",
          "x": 1,
          "y": 1
        },
        "distance": 1,
        "id": "x",
        "name": "x",
        "score": 1
      },
      "stations": [
        {
          "coordinate": {
            "type": "x",
            "x": 1,
            "y": 1
          },
          "distance": 1,
          "id": "x",
          "name": "x",
          "score": 1
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
    "query": [
      "query",
      "x",
      "y",
      "type"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "stations": [
        {
          "coordinate": {
            "type": "x",
            "x": 1,
            "y": 1
          },
          "distance": 1,
          "name": "x",
          "score": 1
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
      "datetime": "v1",
      "id": "v1",
      "limit": "v1",
      "station": "v1",
      "transportation": "v1",
      "type": "v1"
    },
    "headers": [],
    "query": [
      "station",
      "id",
      "limit",
      "transportations[]",
      "datetime",
      "type"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "station": {
        "coordinate": {
          "type": "x",
          "x": 1,
          "y": 1
        },
        "distance": 1,
        "id": "x",
        "name": "x",
        "score": 1
      },
      "stationboard": [
        {
          "capacity1st": 1,
          "capacity2nd": 1,
          "category": "x",
          "categoryCode": 1,
          "name": "x",
          "number": "x",
          "operator": "x",
          "passList": [
            {
              "arrival": "x",
              "arrivalTimestamp": 1,
              "delay": 1,
              "departure": "x",
              "departureTimestamp": 1,
              "location": {
                "coordinate": {},
                "distance": 1,
                "name": "x",
                "score": 1
              },
              "platform": "x",
              "prognosis": {
                "arrival": "x",
                "capacity1st": 1,
                "capacity2nd": 1,
                "departure": "x",
                "platform": "x"
              },
              "realtimeAvailability": "x",
              "station": {
                "coordinate": {},
                "distance": 1,
                "id": "x",
                "name": "x",
                "score": 1
              }
            }
          ],
          "subcategory": "x",
          "to": "x"
        }
      ]
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
