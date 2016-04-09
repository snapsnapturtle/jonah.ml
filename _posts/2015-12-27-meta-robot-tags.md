---
layout: post
title:  "Meta Robot Tags"
date:   2015-12-27 19:13:22
description: Meta robots tag controls spiders from crawling and indexing your webpage or post. In this post, I will explain all the available types, such as nofollow and noodp in detail. 
type: article
tag: article
---

Meta tags are used by spiders while crawling and indexing your site. The *robots meta tag* 
can be used to control if and how search engines see and index your page.

##Default robots tag
If you don’t specify any meta tag in a page then by default spider will crawl and index 
your site. You could consider the following as the default tags:

{% highlight html %}
<meta name="robots" content="index, follow" />
<meta name="robots" content="none" />
{% endhighlight %}


##noindex
Having the content of the robots meta tag set to *noindex* prevents your page from being 
indexed by search engine spiders. This usually comes in handy when you have pages like 
for example a shopping cart page. 

{% highlight html %}
<meta name="robots" content="noindex" />
{% endhighlight %}


##nofollow
This meta tag prevents spiders to follow any link on the page. If you are a newbie then it 
may be confusing to you. Let me explain you in detail. Whenever spider (Google bot) finds a 
link (internal or external) on a page, it lands on that website for crawling and indexing, 
to enforce spider for not following any link on the page, we can use this tag.

{% highlight html %}
<meta name="robots" content="nofollow" />
{% endhighlight %}

##noarchive
You must have seen in search results that whenever you hover on any result it will show a 
snapshot of that page at the right side of the Google search (see the below sreenshot!!). 
That we call a cached copy of the webpage. To prevent a page from being cached we can specify 
below tag.

{% highlight html %}
<meta name="robots" content="noarchive" />
{% endhighlight %}


##noodp
Prevents Search engine (Google, Yahoo and MSN)  to display its own description taken from 
its directory, instead of you meta description. Using below tag would ensure that Search 
engine would display your meta description below search results and it would be useful to 
improve your CTR.

{% highlight html %}
<meta name="robots" content="noodp" />
{% endhighlight %}

##noydir
It is same as above NOODP tag, the only difference is that it would be applicable for Yahoo only.

{% highlight html %}
<meta name="robots" content="noydir" />
{% endhighlight %} 

Best Practice to use noodp and noydir:  You can use the below tag for all of your webpages-

{% highlight html %}
<meta name="robots" content="noodp" />
{% endhighlight %}

OR (above tag and below two tags- both are same)

{% highlight html %}
<meta name="robots" content="noodp " />
<meta name="robots" content="noydir" />
{% endhighlight %}


##Blocking a specific Bot
By specifying meta name as “robots”,you are actually blocking all search engine robots. However if you want to block specific search engine bot then you can specify bot name instead of “robots”

| Bot    | Name      |
|--------|-----------|
| Google | GOOGLEBOT |
| Yahoo  | SLURP     |
| MSN    | MSNBOT    |
| ASK    | TEOMA     |

So, if you want to make your page nofollow for Google bot only then you can use below tag.

<meta name="Googlebot" content="noindex" />

Note: In meta name I have given “Googlebot” instead of “robots” to make it applicable for Google search engine bot only.


