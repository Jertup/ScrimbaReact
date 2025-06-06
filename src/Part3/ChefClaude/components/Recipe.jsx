import react from "react";

function Recipe() {

    return (
        <div className="recipe-button-container">
            <div className="recipe-header">
                <h2>Ready for a recipe?</h2>
                <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button 
                className="generate-recipe-button"
            >Get a recipe</button>
        </div>
    )


}

export default Recipe;