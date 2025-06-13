import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
function Recipe(props) {
    const { ingredientList, fetchRecipe, loading, recipeText } = props;

    return (
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
            className="generate-recipe-button"
            onClick={fetchRecipe}
            disabled={loading}
          >
            {loading ? "Generating..." : "Get a recipe"}
          </button>
        </div>
        }
      {recipeText && (
        <div className="recipe-markdown">
          <ReactMarkdown>{recipeText}</ReactMarkdown>
        </div>
      )}
      </section>
    )


}

export default Recipe;