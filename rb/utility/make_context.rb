# Transport SDK utility: make_context
require_relative '../core/context'
module TransportUtilities
  MakeContext = ->(ctxmap, basectx) {
    TransportContext.new(ctxmap, basectx)
  }
end
