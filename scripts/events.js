const sectionImages = document.querySelectorAll('section img');
window.onscroll = () => {
	sectionImages.forEach((img, i) => {
		const pos = img.getBoundingClientRect();
		const h = window.innerHeight;
		let opacity = 0;
		if (pos.top < h && pos.top > 0) {
			opacity = 1 - pos.top / h * 0.7;
		}
		if (pos.top < 0 && pos.bottom > 0) opacity = 1;
		if (pos.top < 0 && pos.bottom > 0 && pos.bottom < h * 0.6) {
			opacity = pos.bottom / h;
		}
		img.style.opacity = `${opacity}`;
	});
};

/////////////////////////Changing Color of Selected Event ////////////////////////////////

const speaker = document.querySelectorAll('.speaker');
const hackwithmait = document.querySelectorAll('.hackwithmait');
const nnn = document.querySelectorAll('.nnn');
const chess = document.querySelectorAll('.chess');
const valo = document.querySelectorAll('.valorent');
const cp = document.querySelectorAll('.cp');
const quiz = document.querySelectorAll('.quiz');
const uiux = document.querySelectorAll('.uiux');
const pitch = document.querySelectorAll('.pitch');
const list = document.querySelectorAll('.list-optn');

var currSelected = speaker;

for (var i = 0; i < list.length; i++) {
	list[i].addEventListener('click', function() {
		currSelected.classList.remove('selected');
		this.classList.add('selected');
		currSelected = this;
	});
}
