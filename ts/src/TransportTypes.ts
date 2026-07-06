// Typed models for the Transport SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Connection {
  connection?: any[]
  from?: any
  station?: any[]
  to?: any
}

export interface ConnectionListMatch {
  connection?: any[]
  from?: any
  station?: any[]
  to?: any
}

export interface Location {
  coordinate?: any
  distance?: number
  name?: string
  score?: number
}

export interface LocationListMatch {
  coordinate?: any
  distance?: number
  name?: string
  score?: number
}

export interface Stationboard {
  capacity1st?: number
  capacity2nd?: number
  category?: string
  category_code?: number
  name?: string
  number?: string
  operator?: string
  pass_list?: any[]
  subcategory?: string
  to?: string
}

export interface StationboardListMatch {
  capacity1st?: number
  capacity2nd?: number
  category?: string
  category_code?: number
  name?: string
  number?: string
  operator?: string
  pass_list?: any[]
  subcategory?: string
  to?: string
}

