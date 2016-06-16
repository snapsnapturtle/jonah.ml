---
layout: post
title: "The Forbidden Float"
date: 2016-04-24 21:19:47
type: article

background: "/assets/images/forbidden-float.jpg"
background-size-width: "450"
background-size-height: "425"
---

## Why using float or double for money is such a bad idea?

Because floats and doubles cannot accurately represent the base 10 multiples we use for money. This problem
occurs in any programming language that uses native floating-point types, as it stems from how
computers handle floating-point numbers by default.

**Example:**
Suppose you have `$1.03` and you spend `42c`. How much money do you have left?

{% highlight java %}
System.out.println(1.03 - 0.42);
-> 0.6100000000000001
{% endhighlight %}

Well, it is how [`IEEE-754`](https://de.wikipedia.org/wiki/IEEE_754) floating-point number works:
It dedicates a bit for the sign, a few bits to store an exponent for the base, and the rest for a
multiple of that elevated base. This leads to numbers like `10.25` being represented in a form
similar to `1025 * 10^-2`; except that instead of the base being 10, for floats and doubles, it's
two. In our example, the number would be represented by `164 * 2^-4`.

Even in base 10, this notation cannot accurately represent most simple fractions. For instance, 
you can't represent 1/3 as a multiple of a power of 10: you would need to store an infinite amount
of 3's and an infinitely large negative exponent; sadly that is not yet possible. However, for the
purpose of money, in most scenarios all you need is to be able to store multiples of `10^-2`, so it's
not too bad.

Just as some fractions can't be represented exactly as a multiples of a power of 10, some of them 
can't be represented exactly as a multiple of a power of 2, either. In fact, the only fractions of 
a hundred between 0/100 and 100/100 (which are significant when dealing with money because they're 
integer cents) that can be represented exactly as an `IEEE-754` binary floating-point number are 0,
0.25, 0.5, 0.75 and 1. All the others are off by a small amount.

Representing money as a double or float will probably look good at first as the software rounds off 
the tiny errors, but as you perform more additions, subtractions, multiplications and divisions on 
inexact numbers, you'll lose more and more precision as the errors add up. This makes floats and 
doubles not ideal for dealing with money, where perfect accuracy for multiples of base 10 powers
is required.

### so what can you do?

A solution that works in just about any language is to use integers instead, and count cents. For 
instance, 1025 would be $10.25. Several languages sometimes also have built-in types to deal with
money. Among others, Java has the *BigDecimal* class, and C# has the *decimal type*.

I recommend using cents as the currency do all the calculations with those. Once you need to output
those monetary values using a single class that operates as a mediator, converting the cent amounts
to human readable dot/comma separated values, as well as the other way around.
