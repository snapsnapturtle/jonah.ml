window.onload = function() {
	var siteTitle = document.getElementsByClassName('site-title')[ 0 ];
	siteTitle.parentNode.insertBefore(document.getElementById('site-search'), siteTitle);
	document.getElementsByClassName('site-nav')[ 0 ].remove();
	siteTitle.remove();
};

window.searchIndex = lunr(function() {
	this.field('id');
	this.field('title', { boost: 5 });
	this.field('description');
});

var xhr = new XMLHttpRequest();
xhr.addEventListener("load", function() {
	var data = JSON.parse(xhr.responseText);
	window.searchData = data;

	for(var i = 0; i < data.length; i++) {
		window.searchIndex.add({ id: i, title: data[ i ].title, description: data[ i ].description });
	}

	var queries = getQueryString(document.location.search);
	if (typeof queries[ 'query' ] != 'undefined') {
		performSearch(queries[ 'query' ]);
		document.getElementById('search-query').value = queries[ 'query' ];
		window.history.pushState('site search', 'Search', '/search/');
	}
}, false);

xhr.open('GET', '/search/data.json', true);
xhr.send();

function performSearch(query) {
	var results = window.searchIndex.search(query);
	displayResults(results);
}

document.getElementById('site-search').addEventListener('submit', function() {
	event.preventDefault();
	performSearch(document.getElementById('search-query').value)
});

document.getElementById('search-query').addEventListener('keyup', function() {
	event.preventDefault();
	performSearch(document.getElementById('search-query').value);
});


function getQueryString(query) {
	query = query.split('+').join(' ');
	var params = {}, tokens, re = /[?&]?([^=]+)=([^&]*)/g;
	while(tokens = re.exec(query)) {
		params[ decodeURIComponent(tokens[ 1 ]) ] = decodeURIComponent(tokens[ 2 ]);
	}
	return params;
}

function displayResults(resultList) {
	var searchResults = document.getElementById('search-results');

	if (resultList.length) {
		searchResults.innerHTML = '';
		resultList.forEach(function(result) {
			var item = window.searchData[ result.ref ];

			var description = (item.description.split(/\s+/).slice(0, 37).join(' '));

			searchResults.innerHTML += '<a class="post-link" href="' + item.url + '">' +
				'<h2>' + item.title + '</h2>' +
				'<div class="post-meta">' + item.date + '</div>' +
				'<div class="post-foreword">' + description + '…</div>' +
				'</a>';
		});
	} else {
		searchResults.innerHTML = '<li>No results found</li>';
	}
}
