//////// NAV ICON CLICK /////////
const navIcon = document.querySelector(".nav-icon");
const nav = document.querySelector("nav");
navIcon.addEventListener("click", () => {
  if (nav.classList.contains("shown")) {
    nav.classList.remove("shown");
    navIcon.classList.remove("close");
    nav.style.height = 0 + "px";
  } else {
    nav.classList.add("shown");
    navIcon.classList.add("close");
    nav.style.height = nav.scrollHeight + "px";
  }
});
