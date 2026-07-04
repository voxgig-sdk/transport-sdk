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
# @!attribute [rw] connection
#   @return [Array, nil]
#
# @!attribute [rw] from
#   @return [Object, nil]
#
# @!attribute [rw] station
#   @return [Array, nil]
#
# @!attribute [rw] to
#   @return [Object, nil]
Connection = Struct.new(
  :connection,
  :from,
  :station,
  :to,
  keyword_init: true
)

# Match filter for Connection#list (any subset of Connection fields).
#
# @!attribute [rw] connection
#   @return [Array, nil]
#
# @!attribute [rw] from
#   @return [Object, nil]
#
# @!attribute [rw] station
#   @return [Array, nil]
#
# @!attribute [rw] to
#   @return [Object, nil]
ConnectionListMatch = Struct.new(
  :connection,
  :from,
  :station,
  :to,
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

# Match filter for Location#list (any subset of Location fields).
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
LocationListMatch = Struct.new(
  :coordinate,
  :distance,
  :name,
  :score,
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
# @!attribute [rw] category_code
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
# @!attribute [rw] pass_list
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
  :category_code,
  :name,
  :number,
  :operator,
  :pass_list,
  :subcategory,
  :to,
  keyword_init: true
)

# Match filter for Stationboard#list (any subset of Stationboard fields).
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
# @!attribute [rw] category_code
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
# @!attribute [rw] pass_list
#   @return [Array, nil]
#
# @!attribute [rw] subcategory
#   @return [String, nil]
#
# @!attribute [rw] to
#   @return [String, nil]
StationboardListMatch = Struct.new(
  :capacity1st,
  :capacity2nd,
  :category,
  :category_code,
  :name,
  :number,
  :operator,
  :pass_list,
  :subcategory,
  :to,
  keyword_init: true
)

