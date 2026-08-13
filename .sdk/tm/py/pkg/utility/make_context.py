# Transport SDK utility: make_context

from projectname_sdk.core.context import TransportContext


def make_context_util(ctxmap, basectx):
    return TransportContext(ctxmap, basectx)
