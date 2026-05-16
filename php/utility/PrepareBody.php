<?php
declare(strict_types=1);

// Transport SDK utility: prepare_body

class TransportPrepareBody
{
    public static function call(TransportContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
