import React from "react"

export default function App() {
    let [counter, counting] = React.useState(0)
    const handleClick = (type) =>{
      if (type === "+") {
        // Doing this instead of counting(counter + 1) is a good practice to avoid stale state issues
        counting(prevCount=> prevCount + 1);
      } else if (type === "-") {
        counting(prevCount=> prevCount - 1);
      }
    };
    //He did infact say it 17 times in context of react + 1 out of context "Wont leave you in this STATE"
    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" aria-label="Decrease count" onClick={() => handleClick("-")}>–</button>
                <h2 className="count">{counter}</h2>
                <button className="plus" aria-label="Increase count" onClick={() => handleClick("+")}>+</button>
            </div>
        </main>
    )
}
