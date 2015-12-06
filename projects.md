---
layout: default
permalink: /projects/
---

<div class="home">

	<ul class="post-list">
		{% for project in site.tags.project %}
			<li>
				<a class="post-link" href="{{ project.url | prepend: site.baseurl }}">
					<h2>{{ project.title }}</h2>
				</a>
			</li>
		{% endfor %}
	</ul>
</div>
