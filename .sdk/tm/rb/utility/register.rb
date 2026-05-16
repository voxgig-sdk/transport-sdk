# Transport SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

TransportUtility.registrar = ->(u) {
  u.clean = TransportUtilities::Clean
  u.done = TransportUtilities::Done
  u.make_error = TransportUtilities::MakeError
  u.feature_add = TransportUtilities::FeatureAdd
  u.feature_hook = TransportUtilities::FeatureHook
  u.feature_init = TransportUtilities::FeatureInit
  u.fetcher = TransportUtilities::Fetcher
  u.make_fetch_def = TransportUtilities::MakeFetchDef
  u.make_context = TransportUtilities::MakeContext
  u.make_options = TransportUtilities::MakeOptions
  u.make_request = TransportUtilities::MakeRequest
  u.make_response = TransportUtilities::MakeResponse
  u.make_result = TransportUtilities::MakeResult
  u.make_point = TransportUtilities::MakePoint
  u.make_spec = TransportUtilities::MakeSpec
  u.make_url = TransportUtilities::MakeUrl
  u.param = TransportUtilities::Param
  u.prepare_auth = TransportUtilities::PrepareAuth
  u.prepare_body = TransportUtilities::PrepareBody
  u.prepare_headers = TransportUtilities::PrepareHeaders
  u.prepare_method = TransportUtilities::PrepareMethod
  u.prepare_params = TransportUtilities::PrepareParams
  u.prepare_path = TransportUtilities::PreparePath
  u.prepare_query = TransportUtilities::PrepareQuery
  u.result_basic = TransportUtilities::ResultBasic
  u.result_body = TransportUtilities::ResultBody
  u.result_headers = TransportUtilities::ResultHeaders
  u.transform_request = TransportUtilities::TransformRequest
  u.transform_response = TransportUtilities::TransformResponse
}
