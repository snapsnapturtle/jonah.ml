---
layout: post
title:  "Meta Robot Tags"
date:   2015-12-27 19:13:22
type: article
---

Meta tags are used by spiders while crawling and indexing your site. The *robots meta tag* 
can be used to control if and how search engines see and index your page.

**Factory Defaults** If you don’t specify any meta tag in a page then by default spider will 
crawl and index your site. You could consider the following as the default tags:

{% highlight html %}
<meta name="robots" content="index, follow" />
{% endhighlight %}


**noindex** prevents your page from being indexed by search engine spiders. This usually 
comes in handy when you have pages like for example a shopping cart page which is useless
when someone comes here from a search engine. 

{% highlight html %}
<meta name="robots" content="noindex" />
{% endhighlight %}


**nofollow** prevents spiders to follow any link on the page. If you are a newbie then it 
may be confusing to you. Let me explain you in detail. Whenever spider (Google bot) finds a 
link (internal or external) on a page, it lands on that website for crawling and indexing, 
to enforce spider for not following any link on the page, we can use this tag.

{% highlight html %}
<meta name="robots" content="nofollow" />
{% endhighlight %}

**noarchive** prevents your page from being archived by search engines. You must have seen in 
search results that whenever you hover on any result it will show a snapshot of that page at 
the right side of the Google search. That we call a cached copy of the webpage. To prevent a 
page from being cached we can specify below tag.

{% highlight html %}
<meta name="robots" content="noarchive" />
{% endhighlight %}


**noodp** prevents Search engines to display its own description taken from its directory, 
instead of you meta description. Using below tag would ensure that Search engine would display 
your meta description below search results and it would be useful to improve your CTR. **noydir** 
is same, the only difference being that it is only applicable to Yahoo. *Best practice* is to 
use both, noodp and noydir.

{% highlight html %}
<meta name="robots" content="noodp, noydir" />
{% endhighlight %}


**Blocking specific engines** can be achieved by specifying meta name instead of robots, since
that is actually blocking all search engines. However if you want to block specific search engine 
bot then you can specify bot name instead of robots: Google (GOOGLEBOT), Yahoo (SLURP), MSN (MSNBOT)
and ASK (TEOMA). So, if you want to make your page nofollow for Google only then you can use below tag.

{% highlight html %}
<meta name="Googlebot" content="nofollow" />
{% endhighlight %}
