export default function Joke(props) {
  const { setup, punchline, upvotes, comments = [], isPun } = props

  return (
    <div className="joke">
      {setup && <h3>{setup}</h3>}

      <p>{punchline}</p>

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