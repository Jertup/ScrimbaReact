import React from "react"
import Header from "./components/Header"
import { languages } from "./languages"
import { clsx } from "clsx"
import { getFarewellText, getRandomWord } from "./utils.js"
import Confetti from "react-confetti"


export default function AssemblyEndgame() {
	const [currentWord, setCurrentWord] = React.useState(getRandomWord());
	const [guessedLetters, setGuessedLetters] = React.useState([]);
	const alphabet = "abcdefghijklmnopqrstuvwxyz"
	console.log(currentWord)

	const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length
	const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
	const isGameLost = wrongGuessCount >= languages.length - 1
	const isGameOver = isGameWon || isGameLost
	const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
	const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)
	const gameStatusClass = clsx("game-status", {win: isGameWon, lost: isGameLost, farewell: isLastGuessIncorrect});

const wordLetters = currentWord.split("").map((letter, i) => {
    const isGuessed = guessedLetters.includes(letter);
    return (
        <span
            key={i}
            className={clsx("letter", {
                missing: isGameLost && !isGuessed
            })}
        >
            {(isGuessed || isGameLost) ? letter.toUpperCase() : ""}
        </span>
    );
});
	const alphabetElements = alphabet.split("").map((letter) => { 
		const isGuessed = guessedLetters.includes(letter);
		const isCorrect = isGuessed && currentWord.includes(letter);
		const isWrong = isGuessed && !currentWord.includes(letter);
		const className = clsx({
			correct: isCorrect,
			wrong: isWrong
			})
		return(
			<button key={letter} className={className} disabled={isGameOver} onClick={() => handleGuess(letter)}>
				{letter.toUpperCase()}
			</button>
		)
	})

	const languageElements = languages.map((language, i) => {
		const isLanguageLost = i < wrongGuessCount;
		const className = clsx("language-chip", {lost: isLanguageLost})
		return (
			<span
				key={i}
				className={className}
				style={{
					backgroundColor: language.backgroundColor,
					color: language.color
				}}
			>
			{language.name}
			</span> 
		)
	});

	const isWin = [...new Set(currentWord)].every(letter => guessedLetters.includes(letter));
	function handleGuess(letter) {
	setGuessedLetters(prev => prev.includes(letter) ? prev : [...prev, letter]);
	};

	function renderGameStatus() {
		if (!isGameOver && isLastGuessIncorrect) {
			return (<p className="winMessage">{getFarewellText(languages[wrongGuessCount - 1]?.name)}</p>)
		}
		if (isGameWon) {
			return (
				<>
					<h2 className="status">You Win!</h2>
					<p className="winMessage">Well done! 🎉</p>
				</>
			)
		}
		if (isGameLost) {
			return (
				<>
					<h2 className="status">Game Over!</h2>
					<p className="winMessage">You lose! Better start learning Assembly 😭</p>
				</>
			)
		}
		// Add this line:
		return null;
	}
	function newGame() {
		setCurrentWord(getRandomWord());
		setGuessedLetters([]);
	}

	return (
		<main className="main-container">
			{isGameWon && <Confetti recycle={false} numberOfPieces={1000} />}
			<Header />
			<section className={gameStatusClass}>
				{renderGameStatus()}
			</section>
			<section className="language-chips">
				{languageElements}
			</section>
			<section className="word-display">
				{wordLetters}
			</section>
			<section className="keyboard">
				{alphabetElements}
			</section>
			{isGameOver &&<button className="new-game" onClick={()=> newGame()}>New Game</button>}
		</main>
	)
}
