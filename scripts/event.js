///////////////////////// Menu Toggle /////////////////////////////////

const menuToggle = document.querySelectorAll(".menu-heading");
const overview = document.getElementById("overview");
const themes = document.getElementById("themes");
const schedule = document.getElementById("schedule");
const prizes = document.getElementById("prizes");

var list = [overview, themes, schedule, prizes];

var qualSelector = document.querySelector(".menu-heading");
var qualContent = overview;

for (var i = 0; i < menuToggle.length; i++) {
  menuToggle[i].addEventListener("click", function () {
    qualSelector.classList.remove("selected");
    this.classList.add("selected");
    qualSelector = this;

    qualContent.classList.add("hide");
    list[i].classList.remove("hide");
    qualContent = list[i];
  });
}

menuToggle[0].addEventListener("click", function () {
  qualSelector.classList.remove("selected");
  this.classList.add("selected");
  qualSelector = this;

  qualContent.classList.add("hide");
  overview.classList.remove("hide");
  qualContent = overview;
});

menuToggle[1].addEventListener("click", function () {
  qualSelector.classList.remove("selected");
  this.classList.add("selected");
  qualSelector = this;

  qualContent.classList.add("hide");
  themes.classList.remove("hide");
  qualContent = themes;
});

menuToggle[2].addEventListener("click", function () {
  qualSelector.classList.remove("selected");
  this.classList.add("selected");
  qualSelector = this;

  qualContent.classList.add("hide");
  schedule.classList.remove("hide");
  qualContent = schedule;
});

menuToggle[3].addEventListener("click", function () {
  qualSelector.classList.remove("selected");
  this.classList.add("selected");
  qualSelector = this;

  qualContent.classList.add("hide");
  prizes.classList.remove("hide");
  qualContent = prizes;
});
ove;
