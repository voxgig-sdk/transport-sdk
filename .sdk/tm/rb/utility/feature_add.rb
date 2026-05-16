# Transport SDK utility: feature_add
module TransportUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
