---
layout: post
title:  "Mocking the Mocks"
date:   2016-05-09 09:38:19
type: article
---

Mocking can be a difficult thing, especially if you are new to the whole concept and might wonder
yourself, why even bother. The task at hand is unit testing the following code without using any outside
dependencies.

{% highlight php startinline=true %}
class Temperature {
  private $temperatureService;

  public function __construct($temperatureService) {
    $this->temperatureService = $temperatureService;
  }

  public function getAverage() {
    $total = 0;

    for($i = 0; $i < 3; $i++) {
        $total += $this->temperatureService->readTemperature();
    }

    return ($total / 3);
  }
}
{% endhighlight %}

{% highlight php startinline=true %}

class TemperatureTest {
  public function testGetAverage() {
    $mockedTemperatureService = $this->getMockBuilder('\TemperatureService')->disableOriginalConstructor()->getMock();
    $mockedTemperatureService->expects($this->any())->method('readTemperature')->will($this->returnValueMap([9.3, 7.8, 8.1]));

    $temperature = new Temperature($mockedTemperatureService);
    $this->assertEquals(8.9, $temperature->getAverage() );
  }
}
{% endhighlight %}
