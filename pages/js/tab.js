let navElements = document.querySelectorAll("nav span");
let span = document.querySelectorAll(".changeText");
let blackDiv = document.querySelector("#black-div");
let blackDivSpan = document.querySelector("#black-div span");
navElements[0].style.color = "black";
navElements[0].classList.add("clicked-js");

function value(params) {
  span.forEach((e) => {
    e.innerHTML = params;
  });
  blackDivSpan.innerHTML = params;
}
const removeClick = (element, background, color) => {
  navElements.forEach((e) => {
    e.style.color = "gray";
    e.classList.remove("clicked-js");
  });
  element.target.style.color = "black";
  element.target.classList.add("clicked-js");
  blackDiv.style.background = background;
  blackDiv.style.color = color;
};

navElements.forEach((e) => {
  e.addEventListener("click", () => {
    value(e.innerHTML);
  });
});
navElements[0].addEventListener("click", (element) => {
  removeClick(element, "black", "white");
});
navElements[1].addEventListener("click", (element) => {
  removeClick(element, "#00baff", "white");
});
navElements[2].addEventListener("click", (element) => {
  removeClick(element, "#ffc600", "#000000");
});
navElements[3].addEventListener("click", (element) => {
  removeClick(element, "#da00ac", "#ffffff");
});
