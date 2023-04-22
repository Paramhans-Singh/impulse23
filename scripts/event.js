////////////////// FAQ ///////////////
const quesConts = document.querySelectorAll('.faq-others .ques-cont');
let open = -1;
quesConts.forEach((cont, i) => {
	const data = cont.querySelector('p');
	cont.addEventListener('click', function() {
		if (open >= 0) {
			const openData = quesConts[open].querySelector('p');
			quesConts[open].classList.remove('open');
			openData.style.maxHeight = 0 + 'px';
		}
		if (open !== i || open === -1) {
			data.style.maxHeight = data.scrollHeight + 'px';
			cont.classList.add('open');
			open = i;
		} else {
			open = -1;
		}
	});
});

const uiux = document.getElementById('uiux');
uiux.addEventListener('click', function() {
	window.location.href = './uiux.html';
});
const valo = document.getElementById('valo');
valo.addEventListener('click', function() {
	window.location.href = './valo.html';
});
const aiml = document.getElementById('aiml');
aiml.addEventListener('click', function() {
	window.location.href = './aiml.html';
});
const cp = document.getElementById('cp');
cp.addEventListener('click', function() {
	window.location.href = './cp.html';
});

/* This code is adding an event listener to the document object that listens for the "DOMContentLoaded"
event, which is fired when the initial HTML document has been completely loaded and parsed. Once
this event is fired, the arrow function is executed, which calls the "updateTime" function using the
"requestAnimationFrame" method. This ensures that the "updateTime" function is called at the optimal
time for rendering, which helps to improve performance and reduce unnecessary resource usage. */
document.addEventListener('DOMContentLoaded', () => requestAnimationFrame(updateTime));

/**
 * The function updates the time remaining until a specified event in days, hours, minutes, and
 * seconds.
 */
function updateTime() {
	const currDate = new Date();
	const eventDate = new Date(date);
	const distance = Math.round(eventDate.getTime() - currDate.getTime());
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var secs = Math.floor((distance % (1000 * 60)) / 1000);

	// console.log(seconds);
	document.documentElement.style.setProperty('--timer-day', "'" + days + "'");
	document.documentElement.style.setProperty('--timer-hours', "'" + hrs + "'");
	document.documentElement.style.setProperty('--timer-minutes', "'" + mins + "'");
	document.documentElement.style.setProperty('--timer-seconds', "'" + secs + "'");
	requestAnimationFrame(updateTime);
}
