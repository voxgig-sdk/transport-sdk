-- ProjectName SDK configuration

local function make_config()
  return {
    main = {
      name = "Transport",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "http://transport.opendata.ch/v1",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["connection"] = {},
        ["location"] = {},
        ["stationboard"] = {},
      },
    },
    entity = {
      ["connection"] = {
        ["fields"] = {
          {
            ["name"] = "connection",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["active"] = true,
            ["index$"] = 0,
          },
          {
            ["name"] = "from",
            ["req"] = false,
            ["type"] = "`$ANY`",
            ["active"] = true,
            ["index$"] = 1,
          },
          {
            ["name"] = "station",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["active"] = true,
            ["index$"] = 2,
          },
          {
            ["name"] = "to",
            ["req"] = false,
            ["type"] = "`$ANY`",
            ["active"] = true,
            ["index$"] = 3,
          },
        },
        ["name"] = "connection",
        ["op"] = {
          ["list"] = {
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "date",
                      ["orig"] = "date",
                      ["reqd"] = false,
                      ["type"] = "`$ANY`",
                      ["active"] = true,
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "from",
                      ["orig"] = "from",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                      ["active"] = true,
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "is_arrival_time",
                      ["orig"] = "is_arrival_time",
                      ["reqd"] = false,
                      ["type"] = "`$BOOLEAN`",
                      ["active"] = true,
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                      ["active"] = true,
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                      ["active"] = true,
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "time",
                      ["orig"] = "time",
                      ["reqd"] = false,
                      ["type"] = "`$ANY`",
                      ["active"] = true,
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "to",
                      ["orig"] = "to",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                      ["active"] = true,
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "transportation",
                      ["orig"] = "transportation",
                      ["reqd"] = false,
                      ["type"] = "`$ANY`",
                      ["active"] = true,
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "via",
                      ["orig"] = "via",
                      ["reqd"] = false,
                      ["type"] = "`$ANY`",
                      ["active"] = true,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/connections",
                ["parts"] = {
                  "connections",
                },
                ["select"] = {
                  ["exist"] = {
                    "date",
                    "from",
                    "is_arrival_time",
                    "limit",
                    "page",
                    "time",
                    "to",
                    "transportation",
                    "via",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["active"] = true,
                ["index$"] = 0,
              },
            },
            ["input"] = "data",
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["location"] = {
        ["fields"] = {
          {
            ["name"] = "coordinate",
            ["req"] = false,
            ["type"] = "`$ANY`",
            ["active"] = true,
            ["index$"] = 0,
          },
          {
            ["name"] = "distance",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["active"] = true,
            ["index$"] = 1,
          },
          {
            ["name"] = "name",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 2,
          },
          {
            ["name"] = "score",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["active"] = true,
            ["index$"] = 3,
          },
        },
        ["name"] = "location",
        ["op"] = {
          ["list"] = {
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["reqd"] = false,
                      ["type"] = "`$ANY`",
                      ["active"] = true,
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "type",
                      ["orig"] = "type",
                      ["reqd"] = false,
                      ["type"] = "`$ANY`",
                      ["active"] = true,
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "x",
                      ["orig"] = "x",
                      ["reqd"] = false,
                      ["type"] = "`$ANY`",
                      ["active"] = true,
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "y",
                      ["orig"] = "y",
                      ["reqd"] = false,
                      ["type"] = "`$ANY`",
                      ["active"] = true,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/locations",
                ["parts"] = {
                  "locations",
                },
                ["select"] = {
                  ["exist"] = {
                    "query",
                    "type",
                    "x",
                    "y",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["active"] = true,
                ["index$"] = 0,
              },
            },
            ["input"] = "data",
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["stationboard"] = {
        ["fields"] = {
          {
            ["name"] = "capacity1st",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["active"] = true,
            ["index$"] = 0,
          },
          {
            ["name"] = "capacity2nd",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["active"] = true,
            ["index$"] = 1,
          },
          {
            ["name"] = "category",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 2,
          },
          {
            ["name"] = "category_code",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["active"] = true,
            ["index$"] = 3,
          },
          {
            ["name"] = "name",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 4,
          },
          {
            ["name"] = "number",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 5,
          },
          {
            ["name"] = "operator",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 6,
          },
          {
            ["name"] = "pass_list",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["active"] = true,
            ["index$"] = 7,
          },
          {
            ["name"] = "subcategory",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 8,
          },
          {
            ["name"] = "to",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 9,
          },
        },
        ["name"] = "stationboard",
        ["op"] = {
          ["list"] = {
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "datetime",
                      ["orig"] = "datetime",
                      ["reqd"] = false,
                      ["type"] = "`$ANY`",
                      ["active"] = true,
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                      ["active"] = true,
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                      ["active"] = true,
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "station",
                      ["orig"] = "station",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                      ["active"] = true,
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "transportation",
                      ["orig"] = "transportation",
                      ["reqd"] = false,
                      ["type"] = "`$ANY`",
                      ["active"] = true,
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "type",
                      ["orig"] = "type",
                      ["reqd"] = false,
                      ["type"] = "`$ANY`",
                      ["active"] = true,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/stationboard",
                ["parts"] = {
                  "stationboard",
                },
                ["select"] = {
                  ["exist"] = {
                    "datetime",
                    "id",
                    "limit",
                    "station",
                    "transportation",
                    "type",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["active"] = true,
                ["index$"] = 0,
              },
            },
            ["input"] = "data",
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
