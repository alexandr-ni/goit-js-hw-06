const valueEl = document.querySelector("#value");
const buttons = document.querySelectorAll("#counter button");

const counterValue = {
  value: 0,
};

const targetBtnMinus = buttons[0].addEventListener("click", () => {
  counterValue.value -= 1;

  valueEl.textContent = counterValue.value;
});

const targetBtnPlus = buttons[1].addEventListener("click", () => {
  counterValue.value += 1;

  valueEl.textContent = counterValue.value;
});
