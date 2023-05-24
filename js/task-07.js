const sizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
const currentSize = text.style.fontSize = sizeControl.value + "px";

sizeControl.addEventListener("input", onInputRange);

function onInputRange(event) {
  text.style.fontSize = sizeControl.value + "px";
}
