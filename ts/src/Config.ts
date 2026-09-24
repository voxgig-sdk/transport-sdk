
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
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
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
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
          "title": "Connections",
          "type": "`$ARRAY`",
          "short": "Found connections"
        },
        {
          "name": "from",
          "title": "From",
          "type": "`$ANY`",
          "short": "Departure station of search"
        },
        {
          "name": "stations",
          "title": "Stations",
          "type": "`$ARRAY`",
          "short": "All stations from query"
        },
        {
          "name": "to",
          "title": "To",
          "type": "`$ANY`",
          "short": "Arrival station of search"
        }
      ],
      "name": "connection",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/connections",
              "segments": [
                {
                  "lit": "connections"
                }
              ],
              "parts": [
                "connections"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "date",
                    "orig": "date",
                    "type": "`$ANY`",
                    "kind": "query"
                  },
                  {
                    "name": "from",
                    "orig": "from",
                    "type": "`$ANY`",
                    "kind": "query",
                    "reqd": true
                  },
                  {
                    "name": "is_arrival_time",
                    "orig": "is_arrival_time",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "time",
                    "orig": "time",
                    "type": "`$ANY`",
                    "kind": "query"
                  },
                  {
                    "name": "to",
                    "orig": "to",
                    "type": "`$ANY`",
                    "kind": "query",
                    "reqd": true
                  },
                  {
                    "name": "transportation",
                    "orig": "transportation",
                    "type": "`$ANY`",
                    "kind": "query"
                  },
                  {
                    "name": "via",
                    "orig": "via",
                    "type": "`$ANY`",
                    "kind": "query"
                  }
                ]
              },
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
          "title": "Coordinate",
          "type": "`$ANY`",
          "short": "The location coordinates."
        },
        {
          "name": "distance",
          "title": "Distance",
          "type": "`$NUMBER`",
          "short": "If search has been with coordinates, distance to original point in meters.",
          "format": "float"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "The name of this location."
        },
        {
          "name": "score",
          "title": "Score",
          "type": "`$INTEGER`",
          "short": "The score with regard to the search request, the higher the better."
        }
      ],
      "name": "location",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/locations",
              "segments": [
                {
                  "lit": "locations"
                }
              ],
              "parts": [
                "locations"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.stations`"
              },
              "args": {
                "query": [
                  {
                    "name": "query",
                    "orig": "query",
                    "type": "`$ANY`",
                    "kind": "query"
                  },
                  {
                    "name": "type",
                    "orig": "type",
                    "type": "`$ANY`",
                    "kind": "query"
                  },
                  {
                    "name": "x",
                    "orig": "x",
                    "type": "`$ANY`",
                    "kind": "query"
                  },
                  {
                    "name": "y",
                    "orig": "y",
                    "type": "`$ANY`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "query",
                  "type",
                  "x",
                  "y"
                ]
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
          "title": "Capacity1st",
          "type": "`$INTEGER`",
          "short": "The maximum estimated occupation load of 1st class coaches (e.g."
        },
        {
          "name": "capacity2nd",
          "title": "Capacity2nd",
          "type": "`$INTEGER`",
          "short": "The maximum estimated occupation load of 2nd class coaches (e.g."
        },
        {
          "name": "category",
          "title": "Category",
          "type": "`$STRING`",
          "short": "The type of connection this is (e.g."
        },
        {
          "name": "categoryCode",
          "title": "Category Code",
          "type": "`$INTEGER`",
          "short": "An internal category code, indicates the type of the public transport vehicle."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "The name of the connection (e.g."
        },
        {
          "name": "number",
          "title": "Number",
          "type": "`$STRING`",
          "short": "The number of the connection's line (e.g."
        },
        {
          "name": "operator",
          "title": "Operator",
          "type": "`$STRING`",
          "short": "The operator of the connection's line (e.g."
        },
        {
          "name": "passList",
          "title": "Pass List",
          "type": "`$ARRAY`",
          "short": "Checkpoints the train passed on the journey."
        },
        {
          "name": "subcategory",
          "title": "Subcategory",
          "type": "`$STRING`"
        },
        {
          "name": "to",
          "title": "To",
          "type": "`$STRING`",
          "short": "The final destination of this line (e.g."
        }
      ],
      "name": "stationboard",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/stationboard",
              "segments": [
                {
                  "lit": "stationboard"
                }
              ],
              "parts": [
                "stationboard"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.stationboard`"
              },
              "args": {
                "query": [
                  {
                    "name": "datetime",
                    "orig": "datetime",
                    "type": "`$ANY`",
                    "kind": "query"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "station",
                    "orig": "station",
                    "type": "`$ANY`",
                    "kind": "query",
                    "reqd": true
                  },
                  {
                    "name": "transportation",
                    "orig": "transportation",
                    "type": "`$ANY`",
                    "kind": "query"
                  },
                  {
                    "name": "type",
                    "orig": "type",
                    "type": "`$ANY`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "datetime",
                  "id",
                  "limit",
                  "station",
                  "transportation",
                  "type"
                ]
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
  config,
  FEATURE_PLUGINS,
}

