const sizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

sizeControl.addEventListener("change", onInputRange);

function onInputRange(event) {
  text.style.fontSize = sizeControl.value + "px";
}
