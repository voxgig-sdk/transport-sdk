# Typed models for the Transport SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Connection:
    connection: Optional[list] = None
    station: Optional[list] = None
    to: Optional[Any] = None


@dataclass
class ConnectionListMatch:
    connection: Optional[list] = None
    station: Optional[list] = None
    to: Optional[Any] = None


@dataclass
class Location:
    coordinate: Optional[Any] = None
    distance: Optional[float] = None
    name: Optional[str] = None
    score: Optional[int] = None


@dataclass
class LocationListMatch:
    coordinate: Optional[Any] = None
    distance: Optional[float] = None
    name: Optional[str] = None
    score: Optional[int] = None


@dataclass
class Stationboard:
    capacity1st: Optional[int] = None
    capacity2nd: Optional[int] = None
    category: Optional[str] = None
    category_code: Optional[int] = None
    name: Optional[str] = None
    number: Optional[str] = None
    operator: Optional[str] = None
    pass_list: Optional[list] = None
    subcategory: Optional[str] = None
    to: Optional[str] = None


@dataclass
class StationboardListMatch:
    capacity1st: Optional[int] = None
    capacity2nd: Optional[int] = None
    category: Optional[str] = None
    category_code: Optional[int] = None
    name: Optional[str] = None
    number: Optional[str] = None
    operator: Optional[str] = None
    pass_list: Optional[list] = None
    subcategory: Optional[str] = None
    to: Optional[str] = None

