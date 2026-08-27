package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Transport",
			"slug": "transport",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "http://transport.opendata.ch/v1",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"connection": map[string]any{},
				"location": map[string]any{},
				"stationboard": map[string]any{},
			},
		},
		"entity": map[string]any{
			"connection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "connections",
						"short": "Found connections",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "from",
						"short": "Departure station of search",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "stations",
						"short": "All stations from query",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "to",
						"short": "Arrival station of search",
						"type": "`$ANY`",
					},
				},
				"name": "connection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "date",
											"orig": "date",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "from",
											"orig": "from",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "is_arrival_time",
											"orig": "is_arrival_time",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "time",
											"orig": "time",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "to",
											"orig": "to",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "transportation",
											"orig": "transportation",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "via",
											"orig": "via",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/connections",
								"parts": []any{
									"connections",
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"location": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "coordinate",
						"short": "The location coordinates.",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "distance",
						"short": "If search has been with coordinates, distance to original point in meters.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of this location.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "score",
						"short": "The score with regard to the search request, the higher the better.",
						"type": "`$INTEGER`",
					},
				},
				"name": "location",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "x",
											"orig": "x",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "y",
											"orig": "y",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/locations",
								"parts": []any{
									"locations",
								},
								"select": map[string]any{
									"exist": []any{
										"query",
										"type",
										"x",
										"y",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.stations`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"stationboard": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "capacity1st",
						"short": "The maximum estimated occupation load of 1st class coaches (e.g.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "capacity2nd",
						"short": "The maximum estimated occupation load of 2nd class coaches (e.g.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "category",
						"short": "The type of connection this is (e.g.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "categoryCode",
						"short": "An internal category code, indicates the type of the public transport vehicle.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the connection (e.g.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "number",
						"short": "The number of the connection's line (e.g.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "operator",
						"short": "The operator of the connection's line (e.g.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "passList",
						"short": "Checkpoints the train passed on the journey.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "subcategory",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "to",
						"short": "The final destination of this line (e.g.",
						"type": "`$STRING`",
					},
				},
				"name": "stationboard",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "datetime",
											"orig": "datetime",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "station",
											"orig": "station",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "transportation",
											"orig": "transportation",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/stationboard",
								"parts": []any{
									"stationboard",
								},
								"select": map[string]any{
									"exist": []any{
										"datetime",
										"id",
										"limit",
										"station",
										"transportation",
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.stationboard`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
