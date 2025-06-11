import { useMemo } from "react"
import Joke from "./Joke.jsx"
import jokesData from "./jokesData"

export default function App() {
  const enrichedJokes = useMemo(() =>
    jokesData.map((joke, i) => ({ ...joke, id: i })), []
  );
  return (
    <main>
      {enrichedJokes.map((joke) => (
        <Joke 
          key={joke.id}
          setup={joke.setup}
          punchline={joke.punchline}
          upvotes={joke.upvotes}
          isPun={joke.isPun}
          comments={joke.comments}
        />
      ))}
    </main>
  )
}
