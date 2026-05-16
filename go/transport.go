package voxgigtransportsdk

import (
	"github.com/voxgig-sdk/transport-sdk/core"
	"github.com/voxgig-sdk/transport-sdk/entity"
	"github.com/voxgig-sdk/transport-sdk/feature"
	_ "github.com/voxgig-sdk/transport-sdk/utility"
)

// Type aliases preserve external API.
type TransportSDK = core.TransportSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type TransportEntity = core.TransportEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type TransportError = core.TransportError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewConnectionEntityFunc = func(client *core.TransportSDK, entopts map[string]any) core.TransportEntity {
		return entity.NewConnectionEntity(client, entopts)
	}
	core.NewLocationEntityFunc = func(client *core.TransportSDK, entopts map[string]any) core.TransportEntity {
		return entity.NewLocationEntity(client, entopts)
	}
	core.NewStationboardEntityFunc = func(client *core.TransportSDK, entopts map[string]any) core.TransportEntity {
		return entity.NewStationboardEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewTransportSDK = core.NewTransportSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
