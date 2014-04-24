<?php namespace Acme\Billing;

class StripeBilling implements BillingInterface {

    public function charge($charge_info)
    {
        return 'charging with stripe';
    }
}