<?php
declare(strict_types=1);

// Transport SDK utility: result_body

class TransportResultBody
{
    public static function call(TransportContext $ctx): ?TransportResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
