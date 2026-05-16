<?php
declare(strict_types=1);

// Transport SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class TransportMakeContext
{
    public static function call(array $ctxmap, ?TransportContext $basectx): TransportContext
    {
        return new TransportContext($ctxmap, $basectx);
    }
}
