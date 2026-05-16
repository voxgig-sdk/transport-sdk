<?php
declare(strict_types=1);

// Transport SDK utility: result_headers

class TransportResultHeaders
{
    public static function call(TransportContext $ctx): ?TransportResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
