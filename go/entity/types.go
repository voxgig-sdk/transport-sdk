// Typed models for the Transport SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/transport-sdk/go/core"
)

// Connection is the typed data model for the connection entity.
type Connection struct {
	Connections *[]any `json:"connections,omitempty"`
	From *any `json:"from,omitempty"`
	Stations *[]any `json:"stations,omitempty"`
	To *any `json:"to,omitempty"`
}

// ConnectionListMatch is the typed request payload for Connection.ListTyped.
type ConnectionListMatch struct {
	Date *any `json:"date,omitempty"`
	From any `json:"from"`
	IsArrivalTime *bool `json:"is_arrival_time,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Page *int `json:"page,omitempty"`
	Time *any `json:"time,omitempty"`
	To any `json:"to"`
	Transportation *any `json:"transportation,omitempty"`
	Via *any `json:"via,omitempty"`
}

// Location is the typed data model for the location entity.
type Location struct {
	Coordinate *any `json:"coordinate,omitempty"`
	Distance *float64 `json:"distance,omitempty"`
	Name *string `json:"name,omitempty"`
	Score *int `json:"score,omitempty"`
}

// LocationListMatch is the typed request payload for Location.ListTyped.
type LocationListMatch struct {
	Query *any `json:"query,omitempty"`
	Type *any `json:"type,omitempty"`
	X *any `json:"x,omitempty"`
	Y *any `json:"y,omitempty"`
}

// Stationboard is the typed data model for the stationboard entity.
type Stationboard struct {
	Capacity1st *int `json:"capacity1st,omitempty"`
	Capacity2nd *int `json:"capacity2nd,omitempty"`
	Category *string `json:"category,omitempty"`
	CategoryCode *int `json:"categoryCode,omitempty"`
	Name *string `json:"name,omitempty"`
	Number *string `json:"number,omitempty"`
	Operator *string `json:"operator,omitempty"`
	PassList *[]any `json:"passList,omitempty"`
	Subcategory *string `json:"subcategory,omitempty"`
	To *string `json:"to,omitempty"`
}

// StationboardListMatch is the typed request payload for Stationboard.ListTyped.
type StationboardListMatch struct {
	Datetime *any `json:"datetime,omitempty"`
	Id *string `json:"id,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Station any `json:"station"`
	Transportation *any `json:"transportation,omitempty"`
	Type *any `json:"type,omitempty"`
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
