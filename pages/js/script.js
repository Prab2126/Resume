let textarea = document.querySelector("textarea");
let changespan = document.querySelector("#change-num");
let premetive = 0;

textarea.addEventListener("input", (e) => {
  let Inputvalue = e.target.value;
  premetive = Inputvalue.length;
  changespan.innerHTML = premetive;
  if (premetive > 200) {
    textarea.parentElement.classList.add("change-js");
  } else {
    textarea.parentElement.classList.remove("change-js");
  }
});
