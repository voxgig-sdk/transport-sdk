<?php
declare(strict_types=1);

// Transport SDK configuration

class TransportConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Transport",
                "slug" => "transport",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'now' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://transport.opendata.ch/v1",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "connection" => [],
                    "location" => [],
                    "stationboard" => [],
                ],
            ],
            "entity" => [
        'connection' => [
          'fields' => [
            [
              'name' => 'connections',
              'title' => 'Connections',
              'type' => '`$ARRAY`',
              'short' => 'Found connections',
            ],
            [
              'name' => 'from',
              'title' => 'From',
              'type' => '`$ANY`',
              'short' => 'Departure station of search',
            ],
            [
              'name' => 'stations',
              'title' => 'Stations',
              'type' => '`$ARRAY`',
              'short' => 'All stations from query',
            ],
            [
              'name' => 'to',
              'title' => 'To',
              'type' => '`$ANY`',
              'short' => 'Arrival station of search',
            ],
          ],
          'name' => 'connection',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/connections',
                  'segments' => [
                    [
                      'lit' => 'connections',
                    ],
                  ],
                  'parts' => [
                    'connections',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'date',
                        'orig' => 'date',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'from',
                        'orig' => 'from',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => 'Lausanne',
                        'field' => true,
                      ],
                      [
                        'name' => 'is_arrival_time',
                        'orig' => 'isArrivalTime',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'time',
                        'orig' => 'time',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'to',
                        'orig' => 'to',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => 'Genève',
                        'field' => true,
                      ],
                      [
                        'name' => 'transportation',
                        'orig' => 'transportations[]',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'via',
                        'orig' => 'via[]',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'from',
                      'to',
                    ],
                  ],
                  'response' => [
                    'kind' => 'json',
                    'media' => 'application/json',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'location' => [
          'fields' => [
            [
              'name' => 'coordinate',
              'title' => 'Coordinate',
              'type' => '`$ANY`',
              'short' => 'The location coordinates.',
            ],
            [
              'name' => 'distance',
              'title' => 'Distance',
              'type' => '`$NUMBER`',
              'short' => 'If search has been with coordinates, distance to original point in meters.',
              'format' => 'float',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'short' => 'The name of this location.',
            ],
            [
              'name' => 'score',
              'title' => 'Score',
              'type' => '`$INTEGER`',
              'short' => 'The score with regard to the search request, the higher the better.',
            ],
          ],
          'name' => 'location',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/locations',
                  'segments' => [
                    [
                      'lit' => 'locations',
                    ],
                  ],
                  'parts' => [
                    'locations',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.stations`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'query',
                        'orig' => 'query',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'x',
                        'orig' => 'x',
                        'type' => '`$NUMBER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'y',
                        'orig' => 'y',
                        'type' => '`$NUMBER`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [],
                  'response' => [
                    'kind' => 'json',
                    'media' => 'application/json',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'stationboard' => [
          'fields' => [
            [
              'name' => 'capacity1st',
              'title' => 'Capacity1st',
              'type' => '`$INTEGER`',
              'short' => 'The maximum estimated occupation load of 1st class coaches (e.g.',
            ],
            [
              'name' => 'capacity2nd',
              'title' => 'Capacity2nd',
              'type' => '`$INTEGER`',
              'short' => 'The maximum estimated occupation load of 2nd class coaches (e.g.',
            ],
            [
              'name' => 'category',
              'title' => 'Category',
              'type' => '`$STRING`',
              'short' => 'The type of connection this is (e.g.',
            ],
            [
              'name' => 'categoryCode',
              'title' => 'Category Code',
              'type' => '`$INTEGER`',
              'short' => 'An internal category code, indicates the type of the public transport vehicle.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'short' => 'The name of the connection (e.g.',
            ],
            [
              'name' => 'number',
              'title' => 'Number',
              'type' => '`$STRING`',
              'short' => 'The number of the connection\'s line (e.g.',
            ],
            [
              'name' => 'operator',
              'title' => 'Operator',
              'type' => '`$STRING`',
              'short' => 'The operator of the connection\'s line (e.g.',
            ],
            [
              'name' => 'passList',
              'title' => 'Pass List',
              'type' => '`$ARRAY`',
              'short' => 'Checkpoints the train passed on the journey.',
            ],
            [
              'name' => 'subcategory',
              'title' => 'Subcategory',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'to',
              'title' => 'To',
              'type' => '`$STRING`',
              'short' => 'The final destination of this line (e.g.',
            ],
          ],
          'name' => 'stationboard',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/stationboard',
                  'segments' => [
                    [
                      'lit' => 'stationboard',
                    ],
                  ],
                  'parts' => [
                    'stationboard',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.stationboard`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'datetime',
                        'orig' => 'datetime',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'id',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'station',
                        'orig' => 'station',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => 'Aarau',
                      ],
                      [
                        'name' => 'transportation',
                        'orig' => 'transportations[]',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'station',
                    ],
                  ],
                  'response' => [
                    'kind' => 'json',
                    'media' => 'application/json',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return TransportFeatures::make_feature($name);
    }
}
