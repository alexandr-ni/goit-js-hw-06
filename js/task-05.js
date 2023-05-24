const input = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  let name = event.currentTarget.value;

  if (name === "") {
    name = "Anonymous";
  }
  nameEl.textContent = name;
}
