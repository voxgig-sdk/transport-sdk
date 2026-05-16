# ProjectName SDK exists test

import pytest
from transport_sdk import TransportSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = TransportSDK.test(None, None)
        assert testsdk is not None
