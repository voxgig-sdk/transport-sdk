# Transport SDK feature factory

from feature.base_feature import TransportBaseFeature
from feature.test_feature import TransportTestFeature


def _make_feature(name):
    features = {
        "base": lambda: TransportBaseFeature(),
        "test": lambda: TransportTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
