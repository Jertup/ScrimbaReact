function Main() {

const ingredients = ["Chicken", "Oregano", "Tomatoes"]

const ingredientList = ingredients.map(ingredient => (
  <li key={ingredient}>{ingredient}</li>
))

const submitEvent = (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const newIngredient = formData.get("ingredient");
  ingredients.push(newIngredient);
  console.log(ingredients);
  event.target.reset();
}
  return (
    <main>
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
      <ul>
        {ingredientList}
      </ul>
    </main>
  )
}
export default Main;