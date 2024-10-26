let input = document.querySelector("input");
let select1 = document.querySelector("#form");
let select2 = document.querySelector("#to");
let button = document.querySelector("button");
let inputNumber = document.querySelector(".fnum");
let calNumber = document.querySelector(".lnum");
let formValue = inputNumber.nextElementSibling;
let toValue = calNumber.nextElementSibling;
let inputNumValue = 0;
let formSelection = "";
let toSelection = "";
function cal(form, to) {
  if (form == "Fahrenheit" && to == "Celsius") {
    return (input) => ((input - 32) * 5) / 9;
  }
  if (form == "Celsius" && to == "Fahrenheit") {
    return (input) => (input * 9) / 5 + 32;
  }

  if (form == "Celsius" && to == "Kelvin") {
    return (input) => input + 273.15;
  }
  if (form == "Kelvin" && to == "Celsius") {
    return (input) => input - 273.15;
  }
  if (form == "Fahrenheit" && to == "Kelvin") {
    return (input) => ((input - 32) * 5) / 9 + 273.15;
  }
  if (form == "Kelvin" && to == "Fahrenheit") {
    return (input) => ((input - 273.15) * 9) / 5 + 32;
  }
}
let final;
function FetAddCalculated() {
  if (formSelection && toSelection) {
    final = cal(formSelection, toSelection);
  }
}
function btnAllow() {
  if (
    formSelection &&
    toSelection &&
    toSelection != formSelection &&
    inputNumValue
  ) {
    button.style.cursor = "pointer";
    button.disabled = false;
  } else {
    button.style.cursor = " not-allowed";
    button.disabled = true;
  }

  button.addEventListener("click", () => {
    let calculatedNum = final(inputNumValue);
    calNumber.parentElement.style.display = "block";
    toValue.style.display = "inline-block";
    calNumber.innerHTML = calculatedNum.toFixed(2);
    inputNumber.innerHTML = inputNumValue;
    formValue.innerHTML = formSelection;
    toValue.innerHTML = toSelection;
  });
}
input.addEventListener("input", (e) => {
  inputNumValue = Number(e.target.value);
  FetAddCalculated();
  btnAllow();
});

select1.addEventListener("input", (e) => {
  formSelection = e.target.value;
  FetAddCalculated();
  btnAllow();
});
select2.addEventListener("input", (e) => {
  toSelection = e.target.value;

  FetAddCalculated();
  btnAllow();
});
