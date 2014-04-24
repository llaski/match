<?php namespace Acme;

// require __DIR__.'/../vendor/autoload.php';

use Acme\Billing\BillingInterface;

class PurchasesController {

    protected $billing;

    public function __construct(BillingInterface $billing)
    {
        $this->billing = $billing;
    }

    public function buy()
    {
        $charge_info = [];

        $result = $this->billing->charge($charge_info);
        return $result;
    }
}


// (new PurchasesController)->buy();