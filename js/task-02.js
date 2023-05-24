const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

const addIngredients = ingredients.map((ingredient) => {
    const createItem = document.createElement("li");
    createItem.classList.add("item");
    createItem.textContent = ingredient;
    return createItem;
});

ingredientsList.append(...addIngredients);