///////////////////////// Menu Toggle /////////////////////////////////

const menuToggle = document.querySelectorAll('.menu-heading');
const overview = document.getElementById('overview');
const schedule = document.getElementById('schedule');
const prizes = document.getElementById('prizes');

var qualSelector = document.querySelector('.menu-heading');
var qualContent = overview;

menuToggle[0].addEventListener('click', function() {
	qualSelector.classList.remove('selected');
	this.classList.add('selected');
	qualSelector = this;

	qualContent.classList.add('hide');
	qualContent.classList.maxHeight = 0;
	overview.classList.remove('hide');
	qualContent = overview;
});

menuToggle[1].addEventListener('click', function() {
	qualSelector.classList.remove('selected');
	this.classList.add('selected');
	qualSelector = this;

	qualContent.classList.add('hide');
	qualContent.classList.maxHeight = 0;
	schedule.classList.remove('hide');
	qualContent = schedule;
});

menuToggle[2].addEventListener('click', function() {
	qualSelector.classList.remove('selected');
	this.classList.add('selected');
	qualSelector = this;

	qualContent.classList.add('hide');
	qualContent.classList.maxHeight = 0;
	prizes.classList.remove('hide');
	qualContent = prizes;
});
