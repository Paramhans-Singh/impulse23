const bg = document.querySelector("main .bg img");
const events = document.getElementById("events");
const title = document.querySelector("main .title");
window.onscroll = () => {
  const scroll = document.documentElement.scrollTop;
  bg.style.objectPosition = `${scroll * 0.2}px 74%`;
  events.style.paddingLeft = `${5 - scroll * 0.01}rem`;
  title.style.marginBottom = `${scroll * 0.05}rem`;
};
