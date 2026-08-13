-- Typed models for the Transport SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Connection
---@field connections? table
---@field from? any
---@field stations? table
---@field to? any

---@class ConnectionListMatch
---@field connections? table
---@field from? any
---@field stations? table
---@field to? any

---@class Location
---@field coordinate? any
---@field distance? number
---@field name? string
---@field score? number

---@class LocationListMatch
---@field coordinate? any
---@field distance? number
---@field name? string
---@field score? number

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

local M = {}

return M
