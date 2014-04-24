<?php

use Acme\PurchasesController;

class PurchasesControllerTest extends TestCase {

    public function setUp()
    {

    }

    public function testBuyMethod()
    {
        $m = Mockery::mock('Acme\Billing\BillingInterface');
        $m->shouldReceive('charge')->once()->andReturn('tested');

        $controller = new PurchasesController($m);
        $result = $controller->buy();
        // var_dump($result);
        assertEquals('tested', $result);
    }

}
