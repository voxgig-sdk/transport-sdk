<?php
declare(strict_types=1);

// Transport SDK exists test

require_once __DIR__ . '/../transport_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = TransportSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
