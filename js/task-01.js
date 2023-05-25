const items = document.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);
items.forEach((item) => {
  const title = item.firstElementChild;
  console.log(`Category: ${title.textContent}`);

  const itemEl = item.firstElementChild.nextElementSibling.children;
  console.log(`Elements: ${itemEl.length}`);
});
