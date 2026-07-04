// Typed models for the Transport SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Connection is the typed data model for the connection entity.
type Connection struct {
	Connection *[]any `json:"connection,omitempty"`
	From *any `json:"from,omitempty"`
	Station *[]any `json:"station,omitempty"`
	To *any `json:"to,omitempty"`
}

// ConnectionListMatch mirrors the connection fields as an all-optional match
// filter (Go analog of Partial<Connection>).
type ConnectionListMatch struct {
	Connection *[]any `json:"connection,omitempty"`
	From *any `json:"from,omitempty"`
	Station *[]any `json:"station,omitempty"`
	To *any `json:"to,omitempty"`
}

// Location is the typed data model for the location entity.
type Location struct {
	Coordinate *any `json:"coordinate,omitempty"`
	Distance *float64 `json:"distance,omitempty"`
	Name *string `json:"name,omitempty"`
	Score *int `json:"score,omitempty"`
}

// LocationListMatch mirrors the location fields as an all-optional match
// filter (Go analog of Partial<Location>).
type LocationListMatch struct {
	Coordinate *any `json:"coordinate,omitempty"`
	Distance *float64 `json:"distance,omitempty"`
	Name *string `json:"name,omitempty"`
	Score *int `json:"score,omitempty"`
}

// Stationboard is the typed data model for the stationboard entity.
type Stationboard struct {
	Capacity1st *int `json:"capacity1st,omitempty"`
	Capacity2nd *int `json:"capacity2nd,omitempty"`
	Category *string `json:"category,omitempty"`
	CategoryCode *int `json:"category_code,omitempty"`
	Name *string `json:"name,omitempty"`
	Number *string `json:"number,omitempty"`
	Operator *string `json:"operator,omitempty"`
	PassList *[]any `json:"pass_list,omitempty"`
	Subcategory *string `json:"subcategory,omitempty"`
	To *string `json:"to,omitempty"`
}

// StationboardListMatch mirrors the stationboard fields as an all-optional match
// filter (Go analog of Partial<Stationboard>).
type StationboardListMatch struct {
	Capacity1st *int `json:"capacity1st,omitempty"`
	Capacity2nd *int `json:"capacity2nd,omitempty"`
	Category *string `json:"category,omitempty"`
	CategoryCode *int `json:"category_code,omitempty"`
	Name *string `json:"name,omitempty"`
	Number *string `json:"number,omitempty"`
	Operator *string `json:"operator,omitempty"`
	PassList *[]any `json:"pass_list,omitempty"`
	Subcategory *string `json:"subcategory,omitempty"`
	To *string `json:"to,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
