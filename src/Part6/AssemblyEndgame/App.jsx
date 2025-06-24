import React from "react"
import Header from "./components/Header"
import { languages } from "./languages"
import { clsx } from "clsx"

export default function AssemblyEndgame() {
	const [currentWord, setCurrentWord] = React.useState("react");
	const [guessedLetters, setGuessedLetters] = React.useState([]);
	const alphabet = "abcdefghijklmnopqrstuvwxyz"

	const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length
	const isGameWon =
		currentWord.split("").every(letter => guessedLetters.includes(letter))
	const isGameLost = wrongGuessCount >= languages.length - 1
	const isGameOver = isGameWon || isGameLost
	const gameStatusClass = clsx("game-status", {won: isGameWon, lost: isGameLost});

	const wordLetters = currentWord.split("").map((letter, i) => (
		<span key={i} className="letter">
			 {guessedLetters.includes(letter) ? letter.toUpperCase() : ""}
		</span>
	));
	const alphabetElements = alphabet.split("").map((letter) => { 
		const isGuessed = guessedLetters.includes(letter);
		const isCorrect = isGuessed && currentWord.includes(letter);
		const isWrong = isGuessed && !currentWord.includes(letter);
		const className = clsx({
			correct: isCorrect,
			wrong: isWrong
			})
			console.log(className);
		return(
			<button key={letter} className={className} onClick={isGameOver ? null : () => handleGuess(letter)}>
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
		if (!isGameOver) {
			return null
		}
		if (isGameWon) {
			return (
				<>
				<h2 className="status">You Win!</h2>
				<p className="winMessage">Well done! 🎉</p>
				</> )
		} else {
			return (					
				<>
				<h2 className="status">Game Over!</h2>
				<p className="winMessage">You lose! Better start learning Assembly 😭</p>
				</>)
		}
	}


	return (
		<main className="main-container">
			<Header />
			{isGameOver &&
			<section className={gameStatusClass}>
				{renderGameStatus()}
			</section>
			}
			<section className="language-chips">
				{languageElements}
			</section>
			<section className="word-display">
				{wordLetters}
			</section>
			<section className="keyboard">
				{alphabetElements}
			</section>
			{isGameOver &&<button className="new-game">New Game</button>}
		</main>
	)
}
