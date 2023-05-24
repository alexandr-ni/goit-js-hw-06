const input = document.querySelector("#validation-input");
const condition = Number(input.dataset.length);

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  let text = event.currentTarget.value;

  if (text.length === condition) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
