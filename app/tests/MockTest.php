<?php

class MockTest extends \TestCase {

    public function tearDown()
    {
        Mockery::close();
    }

    public function test_mockery()
    {
        $mock = Mockery::mock('Acme\Bar');
        $mock->shouldReceive('run')->once()->andReturn('mocked');
        $mock->run();
        // print_r();
        // assertInstanceOf('Acme\Bar', $mock);
    }

}
