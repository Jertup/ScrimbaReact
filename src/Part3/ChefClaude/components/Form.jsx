import React from "react";
let nextId = 0;

function Main() {

const [ingredients, setIngredients] = React.useState([]);
const [recipeShown, setIsShown] = React.useState(false);

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
      <section className="ingredient-section">
        <h1 className="ingredient-header">Ingredients on hand:</h1>
        <ul className="ingredient-list">
          {ingredientList}
        </ul>
        {ingredientList.length >= 4 && 
        <div className="recipe-button-container">
          <div className="recipe-header">
            <h2>Ready for a recipe?</h2>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
            <button 
            className="generate-recipe-button" onClick={toggleShown}
            >Get a recipe</button>
        </div>
        }
      </section>
    }
    {recipeShown &&
    <section>
    <h2>Chef Claude Recommends:</h2>
    <article className="suggested-recipe-container" aria-live="polite">
        <p>Based on the ingredients you have available, I would recommend making a simple a delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:</p>
        <h3>Beef Bolognese Pasta</h3>
        <strong>Ingredients:</strong>
        <ul>
            <li>1 lb. ground beef</li>
            <li>1 onion, diced</li>
            <li>3 cloves garlic, minced</li>
            <li>2 tablespoons tomato paste</li>
            <li>1 (28 oz) can crushed tomatoes</li>
            <li>1 cup beef broth</li>
            <li>1 teaspoon dried oregano</li>
            <li>1 teaspoon dried basil</li>
            <li>Salt and pepper to taste</li>
            <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
        </ul>
        <strong>Instructions:</strong>
        <ol>
            <li>Bring a large pot of salted water to a boil for the pasta.</li>
            <li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
            <li>Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.</li>
            <li>Stir in the tomato paste and cook for 1 minute.</li>
            <li>Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
            <li>Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.</li>
            <li>While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.</li>
            <li>Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
            <li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
        </ol>
      </article>
      </section>
      }
    </main>
  )
}
export default Main;