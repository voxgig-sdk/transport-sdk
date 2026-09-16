# Transport SDK feature factory

from transport_sdk.feature.base_feature import TransportBaseFeature
from transport_sdk.feature.ratelimit_feature import TransportRatelimitFeature
from transport_sdk.feature.retry_feature import TransportRetryFeature
from transport_sdk.feature.test_feature import TransportTestFeature
from transport_sdk.feature.timeout_feature import TransportTimeoutFeature


_FEATURES = {
    "base": lambda: TransportBaseFeature(),
    "ratelimit": lambda: TransportRatelimitFeature(),
    "retry": lambda: TransportRetryFeature(),
    "test": lambda: TransportTestFeature(),
    "timeout": lambda: TransportTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
