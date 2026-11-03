<?php
declare(strict_types=1);

// Typed models for the Transport SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Connection entity data model. */
class Connection
{
    public ?array $connections = null;
    public mixed $from = null;
    public ?array $stations = null;
    public mixed $to = null;
}

/** Request payload for Connection#list. */
class ConnectionListMatch
{
    public ?string $date = null;
    public string $from;
    public ?int $is_arrival_time = null;
    public ?int $limit = null;
    public ?int $page = null;
    public ?string $time = null;
    public string $to;
    public ?string $transportation = null;
    public ?string $via = null;
}

/** Location entity data model. */
class Location
{
    public mixed $coordinate = null;
    public ?float $distance = null;
    public ?string $name = null;
    public ?int $score = null;
}

/** Request payload for Location#list. */
class LocationListMatch
{
    public ?string $query = null;
    public ?string $type = null;
    public ?float $x = null;
    public ?float $y = null;
}

/** Stationboard entity data model. */
class Stationboard
{
    public ?int $capacity1st = null;
    public ?int $capacity2nd = null;
    public ?string $category = null;
    public ?int $categoryCode = null;
    public ?string $name = null;
    public ?string $number = null;
    public ?string $operator = null;
    public ?array $passList = null;
    public ?string $subcategory = null;
    public ?string $to = null;
}

/** Request payload for Stationboard#list. */
class StationboardListMatch
{
    public ?string $datetime = null;
    public ?string $id = null;
    public ?int $limit = null;
    public string $station;
    public ?string $transportation = null;
    public ?string $type = null;
}

