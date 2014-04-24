<?php namespace Acme;
/*
unit testing - testing in isolation
integration testing - how different parts work together
functional testing - developers point of view
acceptance test - client point of view
system testing
end to end testing
user testing
selenium - testing UI (acceptance)
 */
function time() { return 'timestub'; }

class FooTest extends \TestCase {

    public function setUp()
    {

    }

    public function testGetsTheTime()
    {
        $result = (new Foo)->go();
        // $this->assertEquals('timestub', $result);
        assertEquals('timestub', $result);
    }

}
