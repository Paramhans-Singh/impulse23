const sectionImages = document.querySelectorAll('section img');
// window.onscroll = () => {
// 	sectionImages.forEach((img, i) => {
// 		const pos = img.getBoundingClientRect();
// 		const h = window.innerHeight;
// 		let opacity = 0;
// 		if (pos.top < h && pos.top > 0) {
// 			opacity = 1 - pos.top / h * 0.7;
// 		}
// 		if (pos.top < 0 && pos.bottom > 0) opacity = 1;
// 		if (pos.top < 0 && pos.bottom > 0 && pos.bottom < h * 0.6) {
// 			opacity = pos.bottom / h;
// 		}
// 		img.style.opacity = `${opacity}`;
// 	});
// };