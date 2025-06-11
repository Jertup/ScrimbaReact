import React, {useState} from 'react';

export default function Joke(props) {
  const { setup, punchline, upvotes, comments = [], isPun } = props
  const [isShown, setIsShown] = React.useState(false);
  function toggleShown() {
    setIsShown(prev => !prev);
  }
  return (
    <div className="joke">
      {setup && <h3>{setup}</h3>}
      {isShown ? <p>{punchline}</p> : <p>Click to reveal punchline</p>}
      <button onClick={toggleShown}>{isShown ? "Hide Punchline" : "Show Punchline"}</button>
      {upvotes && <p>Upvotes: {upvotes}</p>}

      {comments.length > 0 && (
        <ul>
          {comments.map((c, i) =>
            typeof c === "string"
              ? <li key={i}>{c}</li>
              : <li key={i}>{c.text}{c.author && <> Author: {c.author}</>}</li>
          )}
        </ul>
      )}
      {isPun !== undefined && <p>{isPun ? "Pun!" : "Not a pun."}</p>}
      <hr />
    </div>
  )
}