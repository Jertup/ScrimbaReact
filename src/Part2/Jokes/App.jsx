import { useMemo } from "react"
import Joke from "./Joke"
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



/*
export default function App() {
    return (
      <>
        <Joke 
          setup=" I got my daughter a fridge for her birthday."
          punchline="I can't wait to see her face light up when she opens it."
          upvotes={35}
          isPun={true}
          comments={["Hilarious!", "Best dad joke ever.", "Love this one!"]}
        />
        <Joke 
          setup=" How did the hacker escape the police?"
          punchline="He just ransomware!"
          upvotes={56}
          isPun={true}
          comments={["Funny!", "Clever!", "I see what you did there."]}
          />
        <Joke 
          setup=" Why don't pirates travel on mountain roads?"
          punchline="Scurvy."
          upvotes={936}
          isPun={true}
          comments={[
            {text: "Arr, that's a good one!", author: "Captain Jack"},
            {text: "I sea what you did there!", author: "First Mate"},
            {text: "Aye, matey!", author: "Sailor Sam"}
          ]}
        />
        <Joke 
          setup=" Why do bees stay in the hive in the winter?"
          punchline="Swarm."
        />
        <Joke
          punchline="I don't know, but the flag is a big plus!"
        />
      </>
    )
  }
    */