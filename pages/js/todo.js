let textinput = document.querySelector(".input-field input");
let createBtn = textinput.nextElementSibling;
let taskPr = document.querySelector("#task");
let inputValue = "";

function creatingElement() {
  let TaskParent = document.createElement("div");
  let CheckBox = document.createElement("div");
  let PrintValue = document.createElement("span");
  TaskParent.classList.add("same-task-css");
  CheckBox.classList.add("checkbox");

  taskPr.append(TaskParent);
  TaskParent.append(CheckBox);
  TaskParent.append(PrintValue);
  PrintValue.innerText = inputValue;
  CheckBox.addEventListener("click", (e) => {
    PrintValue.classList.toggle("js-text-style");
    e.target.classList.toggle("js-pr-text-style");
  });

  let deletelog = TaskParent.insertAdjacentHTML(
    "beforeend",
    `<svg class="svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="recycle-bin"
            >
              <circle cx="12" cy="13" r="17" fill="white" />
              <path
                d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z"
              ></path>
            </svg>`
  );

  let selectingSVG = TaskParent.querySelector(".svg");
  selectingSVG.addEventListener("click", () => {
    TaskParent.remove();
  });
}

function btnCheck(value) {
  let trim = value.trim();
  if (trim && trim !== " ") {
    createBtn.style.cursor = "pointer";
    createBtn.disabled = false;
  } else {
    createBtn.style.cursor = "not-allowed";
    createBtn.disabled = true;
  }
}

textinput.addEventListener("input", (e) => {
  inputValue = e.target.value;
  btnCheck(inputValue);
});

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && inputValue.trim() !== "") {
    creatingElement();
  }
});

createBtn.addEventListener("click", (e) => {
  creatingElement();
});
