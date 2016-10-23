window.onload = function () {
	var text = 'whois jonah.ml<br><br>Jonah Möller is a software developer living and working<br>in Hamburg, Germany at <a href="http://the-white-label.com/"' +
		' target="_blank">white label eCommerce</a>.<br><br>Apart from work-related projects, he enjoys travelling<br>the world and capturing moments with his camera.<br><br><br><b>Contact</b>:&nbsp; &nbsp; <a href="https://www.github.com/snapsnapturtle/">GitHub</a> &nbsp; <a href="https://www.instagram.com/snapsnapturtle/">Instagram</a> &nbsp; <a href="mailto:jonah.moeller@gmail.com">jonah.moeller@gmail.com</a><br><br>#';

	type(text);
}

function type(text, new_caption_length) {
	var captionLength = new_caption_length || 0;
	document.getElementById('caption').innerHTML = text.substr(0, captionLength++);

	if (captionLength < text.length + 1) {
		setTimeout(function() {
			type(text, captionLength);
		}, 1);
	}
}
