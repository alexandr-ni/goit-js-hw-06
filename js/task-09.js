function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  spanHexColor: document.querySelector(".color"),
  bodyEl: document.querySelector("body"),
  button: document.querySelector(".change-color"),
};

refs.button.addEventListener("click", onTargetButtonClick);

function onTargetButtonClick(event) {
  const getRandomColor = (refs.bodyEl.style.backgroundColor = getRandomHexColor());
  refs.spanHexColor.textContent = getRandomColor;
}