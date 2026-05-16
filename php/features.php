<?php
declare(strict_types=1);

// Transport SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class TransportFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new TransportBaseFeature();
            case "test":
                return new TransportTestFeature();
            default:
                return new TransportBaseFeature();
        }
    }
}
