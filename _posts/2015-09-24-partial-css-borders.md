---
layout: post
title: "Partial CSS Borders"
date: 2015-09-24 20:54:19
type: article
---

There is no such thing as border-length in CSS, which would have made this really easy to do. But anyway, 
if you want to have partial borders (e.g. a border that spans only half the length of the div), you can 
use the before/after pseudo selectors for this. You shouldn't have to change any markup at all and this 
is a CSS only solution. The following code should produce the desired result.

{% highlight html %}
<style>
.border-div {
    width: 200px;
    height: 50px;
    background-color: lightgrey;
    position: relative;
}

.border-div:after {
    content: '';
    display: block;
    position: absolute;
    width: 100px;
    top: -0px;
    left: 0px;
    border: 3px solid coral;
}
</style>
<div class="border-div"></div>
{% endhighlight %}

You can also this do this as a SCSS mixin if you like, although this one may need some more work to accomodate 
left and right borders.

{%highlight scss %}
@mixin partial-border(@border-width, @partial-width, @color) {
    content: '';
    display: block;
    position: absolute;
    width: @partial-width;
    top: -@border-width;
    left: 0px;
    background: @color;
    border: @border-width solid @color;
}
{% endhighlight %}
