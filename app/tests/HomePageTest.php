<?php

class HomePageTest extends TestCase {

    public function testDefaultPage()
    {
        // $response = $this->call('GET', '/'); //Simulate request to home page
        // $this->assertTrue(strpos($response->getContent(), 'You have arrived') !== false);

        // $crawler = $this->client->request('GET', '/'); //Simulate request to home page
        // $found = $crawler->filter("body:contains('You have arrived')");
        // $this->assertGreaterThan(0, count($found), 'Expected to see text within view.');
        $this->call('GET', '/');
        $this->see('You have arrived', 'h1');
    }

    public function testDisplaysHomePage()
    {
        $response = $this->call('GET', '/home'); //Simulate request to home page

        // $this->assertRedirectTo('/');
        $this->assertEquals('Home Page', $response->getContent());
    }

    protected function see($text, $scope = 'body')
    {
        $crawler = $this->client->getCrawler();
        $found = $crawler->filter("$scope:contains('$text')");
        $this->assertGreaterThan(0, count($found), "Expected to see $text within $scope in the view.");
    }
}