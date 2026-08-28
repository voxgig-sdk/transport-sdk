# Typed models for the Transport SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Connection(TypedDict, total=False):
    connections: list
    stations: list
    to: Any


class ConnectionListMatchRequired(TypedDict):
    to: Any


class ConnectionListMatch(ConnectionListMatchRequired, total=False):
    date: Any
    is_arrival_time: bool
    limit: int
    page: int
    time: Any
    transportation: Any
    via: Any


class Location(TypedDict, total=False):
    coordinate: Any
    distance: float
    name: str
    score: int


class LocationListMatch(TypedDict, total=False):
    query: Any
    type: Any
    x: Any
    y: Any


class Stationboard(TypedDict, total=False):
    capacity1st: int
    capacity2nd: int
    category: str
    categoryCode: int
    name: str
    number: str
    operator: str
    passList: list
    subcategory: str
    to: str


class StationboardListMatchRequired(TypedDict):
    station: Any


class StationboardListMatch(StationboardListMatchRequired, total=False):
    datetime: Any
    id: str
    limit: int
    transportation: Any
    type: Any
