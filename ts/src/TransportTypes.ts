// Typed models for the Transport SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Connection {
  connections?: any[]
  from?: any
  stations?: any[]
  to?: any
}

export interface ConnectionListMatch {
  date?: string
  from: string
  is_arrival_time?: number
  limit?: number
  page?: number
  time?: string
  to: string
  transportation?: string
  via?: string
}

export interface Location {
  coordinate?: any
  distance?: number
  name?: string
  score?: number
}

export interface LocationListMatch {
  query?: string
  type?: string
  x?: number
  y?: number
}

export interface Stationboard {
  capacity1st?: number
  capacity2nd?: number
  category?: string
  categoryCode?: number
  name?: string
  number?: string
  operator?: string
  passList?: any[]
  subcategory?: string
  to?: string
}

export interface StationboardListMatch {
  datetime?: string
  id?: string
  limit?: number
  station: string
  transportation?: string
  type?: string
}

