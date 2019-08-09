var colors = ['blue', 'yellow', 'pink'];
var colorIndex = Math.floor(Math.random() * (colors.length + 1));

document.querySelectorAll('a').forEach((it, index) => {
    it.classList.add(colors[colorIndex]);
});
