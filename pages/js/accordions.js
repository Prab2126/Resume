let span = document.querySelectorAll(".contaner-span");
let p = document.querySelectorAll(".content-p");
function collapse(e) {
  p.forEach((element) => {
    element.style.display = "none";
  });

  e.classList.toggle("js-toggle");
}

span[0].addEventListener("click", () => {
  collapse(p[0]);
});
span[1].addEventListener("click", () => {
  collapse(p[1]);
});
span[2].addEventListener("click", () => {
  collapse(p[2]);
});

span[3].addEventListener("click", () => {
  collapse(p[3]);
});
span[4].addEventListener("click", () => {
  collapse(p[4]);
});
