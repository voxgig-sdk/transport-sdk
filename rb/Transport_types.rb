# frozen_string_literal: true

# Typed models for the Transport SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Connection entity data model.
#
# @!attribute [rw] connections
#   @return [Array, nil]
#
# @!attribute [rw] from
#   @return [Object, nil]
#
# @!attribute [rw] stations
#   @return [Array, nil]
#
# @!attribute [rw] to
#   @return [Object, nil]
Connection = Struct.new(
  :connections,
  :from,
  :stations,
  :to,
  keyword_init: true
)

# Request payload for Connection#list.
#
# @!attribute [rw] date
#   @return [Object, nil]
#
# @!attribute [rw] from
#   @return [Object]
#
# @!attribute [rw] is_arrival_time
#   @return [Boolean, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] time
#   @return [Object, nil]
#
# @!attribute [rw] to
#   @return [Object]
#
# @!attribute [rw] transportation
#   @return [Object, nil]
#
# @!attribute [rw] via
#   @return [Object, nil]
ConnectionListMatch = Struct.new(
  :date,
  :from,
  :is_arrival_time,
  :limit,
  :page,
  :time,
  :to,
  :transportation,
  :via,
  keyword_init: true
)

# Location entity data model.
#
# @!attribute [rw] coordinate
#   @return [Object, nil]
#
# @!attribute [rw] distance
#   @return [Float, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] score
#   @return [Integer, nil]
Location = Struct.new(
  :coordinate,
  :distance,
  :name,
  :score,
  keyword_init: true
)

# Request payload for Location#list.
#
# @!attribute [rw] query
#   @return [Object, nil]
#
# @!attribute [rw] type
#   @return [Object, nil]
#
# @!attribute [rw] x
#   @return [Object, nil]
#
# @!attribute [rw] y
#   @return [Object, nil]
LocationListMatch = Struct.new(
  :query,
  :type,
  :x,
  :y,
  keyword_init: true
)

# Stationboard entity data model.
#
# @!attribute [rw] capacity1st
#   @return [Integer, nil]
#
# @!attribute [rw] capacity2nd
#   @return [Integer, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] categoryCode
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] number
#   @return [String, nil]
#
# @!attribute [rw] operator
#   @return [String, nil]
#
# @!attribute [rw] passList
#   @return [Array, nil]
#
# @!attribute [rw] subcategory
#   @return [String, nil]
#
# @!attribute [rw] to
#   @return [String, nil]
Stationboard = Struct.new(
  :capacity1st,
  :capacity2nd,
  :category,
  :categoryCode,
  :name,
  :number,
  :operator,
  :passList,
  :subcategory,
  :to,
  keyword_init: true
)

# Request payload for Stationboard#list.
#
# @!attribute [rw] datetime
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] station
#   @return [Object]
#
# @!attribute [rw] transportation
#   @return [Object, nil]
#
# @!attribute [rw] type
#   @return [Object, nil]
StationboardListMatch = Struct.new(
  :datetime,
  :id,
  :limit,
  :station,
  :transportation,
  :type,
  keyword_init: true
)

