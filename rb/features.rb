# Transport SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module TransportFeatures
  def self.make_feature(name)
    case name
    when "base"
      TransportBaseFeature.new
    when "test"
      TransportTestFeature.new
    else
      TransportBaseFeature.new
    end
  end
end
