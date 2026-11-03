# Transport SDK utility: prepare_body
require_relative 'media'
module TransportUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return TransportUtilities.raw_body(ctx.reqdata) if TransportUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
