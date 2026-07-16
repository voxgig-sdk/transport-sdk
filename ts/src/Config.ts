
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


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: 'http://transport.opendata.ch/v1',

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
          "active": true,
          "name": "connection",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 0
        },
        {
          "active": true,
          "name": "from",
          "req": false,
          "type": "`$ANY`",
          "index$": 1
        },
        {
          "active": true,
          "name": "station",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 2
        },
        {
          "active": true,
          "name": "to",
          "req": false,
          "type": "`$ANY`",
          "index$": 3
        }
      ],
      "name": "connection",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "kind": "query",
                    "name": "date",
                    "orig": "date",
                    "reqd": false,
                    "type": "`$ANY`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "from",
                    "orig": "from",
                    "reqd": true,
                    "type": "`$ANY`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "is_arrival_time",
                    "orig": "is_arrival_time",
                    "reqd": false,
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "time",
                    "orig": "time",
                    "reqd": false,
                    "type": "`$ANY`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "to",
                    "orig": "to",
                    "reqd": true,
                    "type": "`$ANY`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "transportation",
                    "orig": "transportation",
                    "reqd": false,
                    "type": "`$ANY`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "via",
                    "orig": "via",
                    "reqd": false,
                    "type": "`$ANY`"
                  }
                ]
              },
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
              },
              "index$": 0
            }
          ],
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "location": {
      "fields": [
        {
          "active": true,
          "name": "coordinate",
          "req": false,
          "type": "`$ANY`",
          "index$": 0
        },
        {
          "active": true,
          "name": "distance",
          "req": false,
          "type": "`$NUMBER`",
          "index$": 1
        },
        {
          "active": true,
          "name": "name",
          "req": false,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "score",
          "req": false,
          "type": "`$INTEGER`",
          "index$": 3
        }
      ],
      "name": "location",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "kind": "query",
                    "name": "query",
                    "orig": "query",
                    "reqd": false,
                    "type": "`$ANY`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "reqd": false,
                    "type": "`$ANY`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "x",
                    "orig": "x",
                    "reqd": false,
                    "type": "`$ANY`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "y",
                    "orig": "y",
                    "reqd": false,
                    "type": "`$ANY`"
                  }
                ]
              },
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
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "stationboard": {
      "fields": [
        {
          "active": true,
          "name": "capacity1st",
          "req": false,
          "type": "`$INTEGER`",
          "index$": 0
        },
        {
          "active": true,
          "name": "capacity2nd",
          "req": false,
          "type": "`$INTEGER`",
          "index$": 1
        },
        {
          "active": true,
          "name": "category",
          "req": false,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "category_code",
          "req": false,
          "type": "`$INTEGER`",
          "index$": 3
        },
        {
          "active": true,
          "name": "name",
          "req": false,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "number",
          "req": false,
          "type": "`$STRING`",
          "index$": 5
        },
        {
          "active": true,
          "name": "operator",
          "req": false,
          "type": "`$STRING`",
          "index$": 6
        },
        {
          "active": true,
          "name": "pass_list",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 7
        },
        {
          "active": true,
          "name": "subcategory",
          "req": false,
          "type": "`$STRING`",
          "index$": 8
        },
        {
          "active": true,
          "name": "to",
          "req": false,
          "type": "`$STRING`",
          "index$": 9
        }
      ],
      "name": "stationboard",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "kind": "query",
                    "name": "datetime",
                    "orig": "datetime",
                    "reqd": false,
                    "type": "`$ANY`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "id",
                    "orig": "id",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "station",
                    "orig": "station",
                    "reqd": true,
                    "type": "`$ANY`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "transportation",
                    "orig": "transportation",
                    "reqd": false,
                    "type": "`$ANY`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "reqd": false,
                    "type": "`$ANY`"
                  }
                ]
              },
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
              },
              "index$": 0
            }
          ],
          "key$": "list"
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

