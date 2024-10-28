let showing = document.querySelector("#showing");
let showingChild = showing.children[0];
let droping = document.querySelector("#down");
let dropingElement = document.querySelectorAll("#down span p");

showing.addEventListener("click", () => {
  droping.classList.toggle("js-drop-down");
});

function check(params) {
  dropingElement.forEach((e) => {
    e.nextElementSibling.innerHTML = "";
  });
  params.nextElementSibling.innerHTML = "&#x2714;";
  showingChild.innerHTML = params.innerHTML;

  params.nextElementSibling.addEventListener("click", () => {
    droping.classList.toggle("js-drop-down");
    showingChild.innerHTML = "Select an Item";
  });
}

function CompatableClick(selected, boolean) {
  if (boolean) {
    droping.classList.toggle("js-drop-down");
    check(selected.target);
  } else {
    check(selected.target.children[0]);
    droping.classList.toggle("js-drop-down");
  }
}
dropingElement.forEach((e) => {
  e.classList.add("ping");
  e.parentElement.classList.add("spaning");
  e.parentElement.addEventListener("click", (selected) => {
    CompatableClick(selected, selected.target.classList.contains("ping"));
  });
});
