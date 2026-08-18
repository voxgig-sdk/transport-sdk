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
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "http://transport.opendata.ch/v1",
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
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'from',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'stations',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'to',
              'type' => '`$ANY`',
            ],
          ],
          'name' => 'connection',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'date',
                        'orig' => 'date',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'from',
                        'orig' => 'from',
                        'reqd' => true,
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'is_arrival_time',
                        'orig' => 'is_arrival_time',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'time',
                        'orig' => 'time',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'to',
                        'orig' => 'to',
                        'reqd' => true,
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'transportation',
                        'orig' => 'transportation',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'via',
                        'orig' => 'via',
                        'type' => '`$ANY`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/connections',
                  'parts' => [
                    'connections',
                  ],
                  'select' => [
                    'exist' => [
                      'date',
                      'from',
                      'is_arrival_time',
                      'limit',
                      'page',
                      'time',
                      'to',
                      'transportation',
                      'via',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
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
              'type' => '`$ANY`',
            ],
            [
              'name' => 'distance',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'score',
              'type' => '`$INTEGER`',
            ],
          ],
          'name' => 'location',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'query',
                        'orig' => 'query',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'x',
                        'orig' => 'x',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'y',
                        'orig' => 'y',
                        'type' => '`$ANY`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/locations',
                  'parts' => [
                    'locations',
                  ],
                  'select' => [
                    'exist' => [
                      'query',
                      'type',
                      'x',
                      'y',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.stations`',
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
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'capacity2nd',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'category',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'categoryCode',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'number',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'operator',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'passList',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'subcategory',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'to',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'stationboard',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'datetime',
                        'orig' => 'datetime',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'id',
                        'orig' => 'id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'station',
                        'orig' => 'station',
                        'reqd' => true,
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'transportation',
                        'orig' => 'transportation',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$ANY`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/stationboard',
                  'parts' => [
                    'stationboard',
                  ],
                  'select' => [
                    'exist' => [
                      'datetime',
                      'id',
                      'limit',
                      'station',
                      'transportation',
                      'type',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.stationboard`',
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
