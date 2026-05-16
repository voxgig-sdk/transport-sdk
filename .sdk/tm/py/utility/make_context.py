# Transport SDK utility: make_context

from core.context import TransportContext


def make_context_util(ctxmap, basectx):
    return TransportContext(ctxmap, basectx)
