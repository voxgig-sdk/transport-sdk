// Typed models for the Transport SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Connection {
  connections?: any[]
  from?: any
  stations?: any[]
  to?: any
}

export interface ConnectionListMatch {
  date?: any
  from: any
  is_arrival_time?: boolean
  limit?: number
  page?: number
  time?: any
  to: any
  transportation?: any
  via?: any
}

export interface Location {
  coordinate?: any
  distance?: number
  name?: string
  score?: number
}

export interface LocationListMatch {
  query?: any
  type?: any
  x?: any
  y?: any
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
  datetime?: any
  id?: string
  limit?: number
  station: any
  transportation?: any
  type?: any
}

