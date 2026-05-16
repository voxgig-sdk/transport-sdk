<?php
declare(strict_types=1);

// Transport SDK utility: clean

class TransportClean
{
    public static function call(TransportContext $ctx, mixed $val): mixed
    {
        return $val;
    }
}
