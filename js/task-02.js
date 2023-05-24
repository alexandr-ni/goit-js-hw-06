const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(ingredient => {
    const createItem = document.createElement("li");
    createItem.textContent = ingredient;
    createItem.classList.add('item');

    const addItem = document.querySelector('#ingredients');
    addItem.appendChild(createItem);
})