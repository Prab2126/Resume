let text_year = document.querySelector("#one");
let text_month = document.querySelector("#two");
let input = document.querySelector("#date");
let button = document.querySelector("button");

const date = new Date();
let [month, yrs] = [date.getMonth() + 1, date.getFullYear()];

input.addEventListener("input", (e) => {
  const inputdate = new Date(e.target.value);
  let [inputMonth, inputYrs] = [
    inputdate.getMonth() + 1,
    inputdate.getFullYear(),
  ];

  let [month_cal, yrs_cal] = [month - inputMonth, yrs - inputYrs];

  if (month_cal < 0) {
    month_cal += 12;
    yrs_cal--;
  }

  console.log(month_cal, yrs_cal);

  if (e.target.value == "") {
    button.disabled = true;
    button.style.cursor = "not-allowed";
  } else {
    button.disabled = false;
    button.style.cursor = "pointer";
    button.addEventListener("click", () => {
      text_month.innerHTML = month_cal;
      text_year.innerHTML = yrs_cal;
    });
  }
});
