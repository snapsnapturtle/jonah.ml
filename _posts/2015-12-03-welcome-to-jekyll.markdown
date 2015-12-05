---
layout: post
title:  "Welcome to Jekyll!"
date:   2015-12-03 21:12:15
---
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve --watch`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll’s dedicated Help repository][jekyll-help].


{% highlight php startinline=true %}
if(!empty($_GET['article'])) {
    $title = ucwords(strtolower(str_replace('-', ' ', $_GET['article'])));
    $article = file_get_contents("articles/" . $_GET['article'] . ".html" );
} else {
    $article = "<h1>Error 404</h1><p>I'm terribly sorry, but you have found a page that does not exist</p>";
}
{% endhighlight %}
