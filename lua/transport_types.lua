-- Typed models for the Transport SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Connection
---@field connections? table
---@field from? any
---@field stations? table
---@field to? any

---@class ConnectionListMatch
---@field date? string
---@field from string
---@field is_arrival_time? number
---@field limit? number
---@field page? number
---@field time? string
---@field to string
---@field transportation? string
---@field via? string

---@class Location
---@field coordinate? any
---@field distance? number
---@field name? string
---@field score? number

---@class LocationListMatch
---@field query? string
---@field type? string
---@field x? number
---@field y? number

---@class Stationboard
---@field capacity1st? number
---@field capacity2nd? number
---@field category? string
---@field categoryCode? number
---@field name? string
---@field number? string
---@field operator? string
---@field passList? table
---@field subcategory? string
---@field to? string

---@class StationboardListMatch
---@field datetime? string
---@field id? string
---@field limit? number
---@field station string
---@field transportation? string
---@field type? string

local M = {}

return M
