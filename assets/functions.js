window.onload = function () {
	type(home.join('<br>'));
};

function type(text, new_caption_length) {
	var captionLength = new_caption_length || 0;
	document.getElementById('caption').innerHTML = text.substr(0, captionLength++);

	if (captionLength < text.length + 1) {
		setTimeout(function() {
			type(text, captionLength);
		}, 1);
	}
}

var links = {
	wlec: '<a target="_blank" href="//the-white-label.com/">white label eCommerce</a>',
	github: '<a target="_blank" href="//github.com/snapsnapturtle/">GitHub</a>',
	instagram: '<a target="_blank" href="//instagram.com/snapsnapturtle">Instagram</a>',
	xing: '<a target="_blank" href="//xing.com/profile/Jonah_Moeller2">Xing</a>',
	mail: '<a href="mailto:jonah.moeller@gmail.com">jonah.moeller@gmail.com</a>'
};


var home = [
	'whois <a href="//jonah.ml">jonah.ml</a><br>',
	'Jonah Möller is a software developer living and working',
    'in Hamburg, Germany at ' + links.wlec + '<br>',
    'Apart from work-related projects, he enjoys travelling',
    'the world and capturing moments with his camera.<br>',
    '',
    'Contact: &nbsp; ' + links.github + ' &nbsp; ' + links.instagram + ' &nbsp; ' + links.mail,
    '',
    '> '
];

