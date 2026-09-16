package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewConnectionEntityFunc func(client *TransportSDK, entopts map[string]any) TransportEntity

var NewLocationEntityFunc func(client *TransportSDK, entopts map[string]any) TransportEntity

var NewStationboardEntityFunc func(client *TransportSDK, entopts map[string]any) TransportEntity

