<?php
declare(strict_types=1);

// Transport SDK utility: feature_add

class TransportFeatureAdd
{
    public static function call(TransportContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
