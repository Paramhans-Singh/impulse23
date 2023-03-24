var document = window.document;

console.log("hello");

const sectionImages = document.querySelectorAll("section img");
window.onscroll = () => {
  sectionImages.forEach((img, i) => {
    const pos = img.getBoundingClientRect();
    const h = window.innerHeight;
    let opacity = 0;
    if (pos.top < h && pos.top > 0) {
      opacity = 1 - (pos.top / h) * 0.7;
    }
    if (pos.top < 0 && pos.bottom > 0) opacity = 1;
    if (pos.top < 0 && pos.bottom > 0 && pos.bottom < h * 0.6) {
      opacity = pos.bottom / h;
    }
    img.style.opacity = `${opacity}`;
  });
};

/////////////////////////Changing Color of Selected Event ////////////////////////////////

const speaker = document.querySelectorAll(".speaker");
const hackmait = document.querySelectorAll(".hackmait");
const nnn = document.querySelectorAll(".nnn");
const chess = document.querySelectorAll(".chess");
const valo = document.querySelectorAll(".valorent");
const cp = document.querySelectorAll(".cp");
const quiz = document.querySelectorAll(".quiz");
const uiux = document.querySelectorAll(".uiux");
const pitch = document.querySelectorAll(".pitch");
const list = document.querySelectorAll(".list-optn");

var currSelected = speaker;

for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    console.log("check");
    currSelected.classList.remove("selected");
    this.classList.add("selected");
    currSelected = this;
  });
}

//for scroll
const sections = Array.prototype.slice.call(
  document.querySelectorAll(".section")
);
window.addEventListener("scroll", function () {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
      document
        .querySelector(".menu a[href*=" + sectionId + "] .dot")
        .classList.add("selected");
    else
      document
        .querySelector(".menu a[href*=" + sectionId + "] .dot")
        .classList.remove("selected");
  });
});
