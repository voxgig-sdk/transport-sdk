
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Transport',
        slug: "transport",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "http://transport.opendata.ch/v1",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      connection: {
      },

      location: {
      },

      stationboard: {
      },

    }
  }


  entity = {
    "connection": {
      "fields": [
        {
          "name": "connections",
          "short": "Found connections",
          "type": "`$ARRAY`"
        },
        {
          "name": "from",
          "short": "Departure station of search",
          "type": "`$ANY`"
        },
        {
          "name": "stations",
          "short": "All stations from query",
          "type": "`$ARRAY`"
        },
        {
          "name": "to",
          "short": "Arrival station of search",
          "type": "`$ANY`"
        }
      ],
      "name": "connection",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "date",
                    "orig": "date",
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "from",
                    "orig": "from",
                    "reqd": true,
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "is_arrival_time",
                    "orig": "is_arrival_time",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "time",
                    "orig": "time",
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "to",
                    "orig": "to",
                    "reqd": true,
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "transportation",
                    "orig": "transportation",
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "via",
                    "orig": "via",
                    "type": "`$ANY`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/connections",
              "parts": [
                "connections"
              ],
              "select": {
                "exist": [
                  "date",
                  "from",
                  "is_arrival_time",
                  "limit",
                  "page",
                  "time",
                  "to",
                  "transportation",
                  "via"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "location": {
      "fields": [
        {
          "name": "coordinate",
          "short": "The location coordinates.",
          "type": "`$ANY`"
        },
        {
          "name": "distance",
          "short": "If search has been with coordinates, distance to original point in meters.",
          "type": "`$NUMBER`"
        },
        {
          "name": "name",
          "short": "The name of this location.",
          "type": "`$STRING`"
        },
        {
          "name": "score",
          "short": "The score with regard to the search request, the higher the better.",
          "type": "`$INTEGER`"
        }
      ],
      "name": "location",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "query",
                    "orig": "query",
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "x",
                    "orig": "x",
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "y",
                    "orig": "y",
                    "type": "`$ANY`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/locations",
              "parts": [
                "locations"
              ],
              "select": {
                "exist": [
                  "query",
                  "type",
                  "x",
                  "y"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.stations`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "stationboard": {
      "fields": [
        {
          "name": "capacity1st",
          "short": "The maximum estimated occupation load of 1st class coaches (e.g.",
          "type": "`$INTEGER`"
        },
        {
          "name": "capacity2nd",
          "short": "The maximum estimated occupation load of 2nd class coaches (e.g.",
          "type": "`$INTEGER`"
        },
        {
          "name": "category",
          "short": "The type of connection this is (e.g.",
          "type": "`$STRING`"
        },
        {
          "name": "categoryCode",
          "short": "An internal category code, indicates the type of the public transport vehicle.",
          "type": "`$INTEGER`"
        },
        {
          "name": "name",
          "short": "The name of the connection (e.g.",
          "type": "`$STRING`"
        },
        {
          "name": "number",
          "short": "The number of the connection's line (e.g.",
          "type": "`$STRING`"
        },
        {
          "name": "operator",
          "short": "The operator of the connection's line (e.g.",
          "type": "`$STRING`"
        },
        {
          "name": "passList",
          "short": "Checkpoints the train passed on the journey.",
          "type": "`$ARRAY`"
        },
        {
          "name": "subcategory",
          "type": "`$STRING`"
        },
        {
          "name": "to",
          "short": "The final destination of this line (e.g.",
          "type": "`$STRING`"
        }
      ],
      "name": "stationboard",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "datetime",
                    "orig": "datetime",
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "station",
                    "orig": "station",
                    "reqd": true,
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "transportation",
                    "orig": "transportation",
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "type": "`$ANY`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/stationboard",
              "parts": [
                "stationboard"
              ],
              "select": {
                "exist": [
                  "datetime",
                  "id",
                  "limit",
                  "station",
                  "transportation",
                  "type"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.stationboard`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

