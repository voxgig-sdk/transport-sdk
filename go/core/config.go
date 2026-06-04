package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Transport",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
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
						"name": "connection",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "from",
						"req": false,
						"type": "`$ANY`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "station",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "to",
						"req": false,
						"type": "`$ANY`",
						"active": true,
						"index$": 3,
					},
				},
				"name": "connection",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "date",
											"orig": "date",
											"reqd": false,
											"type": "`$ANY`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "from",
											"orig": "from",
											"reqd": true,
											"type": "`$ANY`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "is_arrival_time",
											"orig": "is_arrival_time",
											"reqd": false,
											"type": "`$BOOLEAN`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "time",
											"orig": "time",
											"reqd": false,
											"type": "`$ANY`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "to",
											"orig": "to",
											"reqd": true,
											"type": "`$ANY`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "transportation",
											"orig": "transportation",
											"reqd": false,
											"type": "`$ANY`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "via",
											"orig": "via",
											"reqd": false,
											"type": "`$ANY`",
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
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
						"req": false,
						"type": "`$ANY`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "distance",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "name",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "score",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 3,
					},
				},
				"name": "location",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"reqd": false,
											"type": "`$ANY`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"reqd": false,
											"type": "`$ANY`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "x",
											"orig": "x",
											"reqd": false,
											"type": "`$ANY`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "y",
											"orig": "y",
											"reqd": false,
											"type": "`$ANY`",
											"active": true,
										},
									},
								},
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
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
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
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "capacity2nd",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "category",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "category_code",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "name",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "number",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "operator",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 6,
					},
					map[string]any{
						"name": "pass_list",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 7,
					},
					map[string]any{
						"name": "subcategory",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 8,
					},
					map[string]any{
						"name": "to",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 9,
					},
				},
				"name": "stationboard",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "datetime",
											"orig": "datetime",
											"reqd": false,
											"type": "`$ANY`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "id",
											"orig": "id",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "station",
											"orig": "station",
											"reqd": true,
											"type": "`$ANY`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "transportation",
											"orig": "transportation",
											"reqd": false,
											"type": "`$ANY`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"reqd": false,
											"type": "`$ANY`",
											"active": true,
										},
									},
								},
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
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
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
