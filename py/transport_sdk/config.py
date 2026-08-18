# Transport SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
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
            "name": "connections",
            "type": "`$ARRAY`",
          },
          {
            "name": "from",
            "type": "`$ANY`",
          },
          {
            "name": "stations",
            "type": "`$ARRAY`",
          },
          {
            "name": "to",
            "type": "`$ANY`",
          },
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
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "from",
                      "orig": "from",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "is_arrival_time",
                      "orig": "is_arrival_time",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "time",
                      "orig": "time",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "to",
                      "orig": "to",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "transportation",
                      "orig": "transportation",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "via",
                      "orig": "via",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
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
              },
            ],
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
            "type": "`$ANY`",
          },
          {
            "name": "distance",
            "type": "`$NUMBER`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "score",
            "type": "`$INTEGER`",
          },
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
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "type",
                      "orig": "type",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "x",
                      "orig": "x",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "y",
                      "orig": "y",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
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
                  "res": "`body.stations`",
                },
              },
            ],
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
            "type": "`$INTEGER`",
          },
          {
            "name": "capacity2nd",
            "type": "`$INTEGER`",
          },
          {
            "name": "category",
            "type": "`$STRING`",
          },
          {
            "name": "categoryCode",
            "type": "`$INTEGER`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "number",
            "type": "`$STRING`",
          },
          {
            "name": "operator",
            "type": "`$STRING`",
          },
          {
            "name": "passList",
            "type": "`$ARRAY`",
          },
          {
            "name": "subcategory",
            "type": "`$STRING`",
          },
          {
            "name": "to",
            "type": "`$STRING`",
          },
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
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "station",
                      "orig": "station",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "transportation",
                      "orig": "transportation",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "type",
                      "orig": "type",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
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
                  "res": "`body.stationboard`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
