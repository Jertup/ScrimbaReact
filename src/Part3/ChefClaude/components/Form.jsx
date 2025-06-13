import React from "react";
import ClaudeRecipe from "./ClaudeRecipe.jsx";
import Recipe from "./Recipe.jsx";
import { getRecipeFromMistral } from "./ai";
let nextId = 0;

function Main() {

const [ingredients, setIngredients] = React.useState([]);
const [recipeShown, setIsShown] = React.useState(false);
const [recipeText, setRecipeText] = React.useState("");
const [loading, setLoading] = React.useState(false);

  async function fetchRecipe() {
    setLoading(true);
    setRecipeText("");
    try {
      const recipe = await getRecipeFromMistral(ingredients.map(i => i.value));
      setRecipeText(recipe);
    } catch (err) {
      setRecipeText("Failed to fetch recipe.");
    }
    setLoading(false);
  }
  
const ingredientList = ingredients.map(ingredient => (
  <li key={ingredient.id}>{ingredient.value}</li>
));

const toggleShown = () => {
  setIsShown(prev => !prev);
}

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
        {ingredientList.length > 0 && 
          <Recipe 
            ingredientList={ingredientList} 
            fetchRecipe={fetchRecipe}
            recipeText={recipeText}
            loading={loading} 
          />}
        {recipeShown && <ClaudeRecipe /> }
    </main>
  )
}
export default Main;