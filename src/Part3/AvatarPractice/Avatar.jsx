import React from "react"
export default function Star() {
const [isFavorite, setIsFavorite] = React.useState(false)
const starFilled = new URL("./images/star-filled.png", import.meta.url)
const starEmpty = new URL("./images/star-empty.png", import.meta.url)
    let starIcon = isFavorite ? starFilled : starEmpty
  function toggleFavorite() {
    setIsFavorite(prevFavorite => !prevFavorite)
  }

  return (
  <button
    onClick={toggleFavorite}
    aria-pressed={isFavorite}
    aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    className="favorite-button"
  >
  <img
    src={starIcon}
    alt={isFavorite ? "filled star icon" : "empty star icon"}
    className="favorite"
  />
  </button>
  )
}