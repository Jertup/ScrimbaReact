import { useState, useRef, useEffect } from "react"
import Die from "./components/Die";
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

export default function App() {
  const [dice, setDice] = useState(() => allNewDice())
  const buttonRef = useRef(null)

    function allNewDice() {
        return new Array(10)
            .fill(0)
            .map((_, i) => ({
                value: Math.ceil(Math.random() * 6),
                id: nanoid(),
                isHeld: false
            }));
    }

    function hold(id) {
      setDice(prev => prev.map(die => die.id === id ? {...die, isHeld: !die.isHeld} : die)
      );
    }

    function rollDice() {
      setDice(prev =>
        prev.map(die => die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6)})
      );
    }

    function newGame() {
      setDice(allNewDice());
      console.log("New game started!");
    }

  const gameWon = dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value);
    useEffect(() => {
      if (gameWon) {
          buttonRef.current.focus()
      }
    }, [gameWon])

  const diceElements = dice.map(die => 
    <Die 
      key={die.id} 
      value={die.value} 
      isHeld={die.isHeld} 
      hold={() => hold(die.id)}
    />)

  return (
    <main className="tenzies-app">
      {gameWon && <Confetti recycle={false} numberOfPieces={1000}/>}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
      </p>
        <div className="dice-container">
          {diceElements}
        </div>
        <button ref={buttonRef} className="roll-button" onClick={gameWon ? newGame : rollDice}>
          {gameWon ? "New Game" : "Roll"}
        </button>
    </main>
    )
}