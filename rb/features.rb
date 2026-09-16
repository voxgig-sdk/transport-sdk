# Transport SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module TransportFeatures
  def self.make_feature(name)
    case name
    when "base"
      TransportBaseFeature.new
    when "ratelimit"
      TransportRatelimitFeature.new
    when "retry"
      TransportRetryFeature.new
    when "test"
      TransportTestFeature.new
    when "timeout"
      TransportTimeoutFeature.new
    else
      TransportBaseFeature.new
    end
  end
end
