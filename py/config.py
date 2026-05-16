# Transport SDK configuration


def make_config():
    return {
        "main": {
            "name": "Transport",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "http://transport.opendata.ch/v1",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "connection": {},
                "location": {},
                "stationboard": {},
            },
        },
        "entity": {
      "connection": {
        "fields": [
          {
            "name": "connection",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "from",
            "req": False,
            "type": "`$ANY`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "station",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "to",
            "req": False,
            "type": "`$ANY`",
            "active": True,
            "index$": 3,
          },
        ],
        "name": "connection",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "date",
                      "orig": "date",
                      "reqd": False,
                      "type": "`$ANY`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "from",
                      "orig": "from",
                      "reqd": True,
                      "type": "`$ANY`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "is_arrival_time",
                      "orig": "is_arrival_time",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "time",
                      "orig": "time",
                      "reqd": False,
                      "type": "`$ANY`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "to",
                      "orig": "to",
                      "reqd": True,
                      "type": "`$ANY`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "transportation",
                      "orig": "transportation",
                      "reqd": False,
                      "type": "`$ANY`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "via",
                      "orig": "via",
                      "reqd": False,
                      "type": "`$ANY`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/connections",
                "parts": [
                  "connections",
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
                    "via",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "location": {
        "fields": [
          {
            "name": "coordinate",
            "req": False,
            "type": "`$ANY`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "distance",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "score",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 3,
          },
        ],
        "name": "location",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "reqd": False,
                      "type": "`$ANY`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "type",
                      "orig": "type",
                      "reqd": False,
                      "type": "`$ANY`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "x",
                      "orig": "x",
                      "reqd": False,
                      "type": "`$ANY`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "y",
                      "orig": "y",
                      "reqd": False,
                      "type": "`$ANY`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/locations",
                "parts": [
                  "locations",
                ],
                "select": {
                  "exist": [
                    "query",
                    "type",
                    "x",
                    "y",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "stationboard": {
        "fields": [
          {
            "name": "capacity1st",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "capacity2nd",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "category",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "category_code",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "number",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "operator",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "pass_list",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "subcategory",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "to",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 9,
          },
        ],
        "name": "stationboard",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "datetime",
                      "orig": "datetime",
                      "reqd": False,
                      "type": "`$ANY`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "id",
                      "orig": "id",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "station",
                      "orig": "station",
                      "reqd": True,
                      "type": "`$ANY`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "transportation",
                      "orig": "transportation",
                      "reqd": False,
                      "type": "`$ANY`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "type",
                      "orig": "type",
                      "reqd": False,
                      "type": "`$ANY`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/stationboard",
                "parts": [
                  "stationboard",
                ],
                "select": {
                  "exist": [
                    "datetime",
                    "id",
                    "limit",
                    "station",
                    "transportation",
                    "type",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
