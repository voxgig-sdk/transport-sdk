# Transport SDK exists test

require "minitest/autorun"
require_relative "../Transport_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = TransportSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
