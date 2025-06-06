import React from "react";
let nextId = 0;

function Main() {

const [ingredients, setIngredients] = React.useState([]);

const ingredientList = ingredients.map(ingredient => (
  <li key={ingredient.id}>{ingredient.value}</li>
));
const submitEvent = (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const newIngredient = formData.get("ingredient");
  setIngredients(prev => [...prev, { id: nextId++, value: newIngredient }]);
    console.log(ingredients);
  event.target.reset();
}
  return (
    <main className="form-content">
      <form onSubmit={submitEvent} className="add-ingredient-form">
        <input 
          aria-label="Add ingredient" 
          type="text" 
          placeholder="Enter your ingredient"
          name="ingredient"
        />
        <button>
          Add Ingredient
        </button>
      </form>
      <ul className="ingredient-list">
        {ingredientList}
      </ul>
    </main>
  )
}
export default Main;