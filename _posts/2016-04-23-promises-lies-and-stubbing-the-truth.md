---
layout: post
title:  "Promises, Lies and Stubbing the Truth"
date:   2016-04-22 12:34:03
description: "A mocking framework such as Sinon.JS allows you to alter the way functions behave during a unit test. Mocking frameworks are especially powerful in dynamic languages, like JavaScript, as they are able to make large changes to your codebase for a given unit test."
type: article
---

A mocking framework allows you to alter the way functions behave during a unit test. Mocking frameworks are 
especially powerful in dynamic languages, like JavaScript, as they are able to make large changes to your 
codebase for a given unit test and then restore all those changes immediately after the test completes. 
We will be looking at SinonJS.

Sinon.js is able to completely rewrite a function during a test-case, let\'s take a look at our service module:

{% highlight javascript %}
test('Sinon stubbing example', function() {
    // Use sinon.js to redefine the service.fetch function.
    sinon.stub(service, 'fetch').returns('Hello!');
    // Now when we call it; it returns a String.
    equal(service.fetch('testcase-data'), 'Hello!');
});
{% endhighlight %}

The above example isn\'t very useful; however, instead of returning a String, we can just as easily return a 
Promise instance, and that’s when things start getting useful:

{% highlight javascript %}
test('Stubbing the service so it returns an expected response', function() { 
    // Stub the service so it returns a resolved promise
    var expectedResponse = '{ 'pages': [ 'data1', 'data2', 'data3' ]}';
    sinon.stub(service, 'fetch').returns(when(expectedResponse));
    // Client Call
    client.getNumPages('testcase-query')
        .then(function (numPages) { 
            strictEqual(numPages, 3, '3 pages returned');
        });
});
{% endhighlight %}

The expectedPromise Promise object has already been resolved – no need to wait for anything to complete 
asynchronously. Our test is no longer reliant on the server (hence deterministic) and it no longer relies 
on a service call (and will therefore execute almost instantly). That leaves only one last point from our 
rules above: testing the failure path.

{% highlight javascript %}
test('service failure', function () { 
    // Again, start by stubbing the fetch method. This time we will return a rejected Promise
    var expectedError = new Error('Bad Query');
    sinon.stub(service, 'fetch').returns(when.reject(expectedError));
    // Call the client and expect it to fail
    client.getNumPages('testcase-query')
        .otherwise(function (error) { 
            strictEqual(error, expectedError, 'Error from API provided to handler');
        });
});
{% endhighlight %}
    
Hopefully this post has been useful in highlight just a couple of the ways in which Promises and a mocking 
framework can be combined to remove both non-determinism, and slow execution speed from your tests as well 
as making it easy to test all paths of your code, even if they depend on external data.

