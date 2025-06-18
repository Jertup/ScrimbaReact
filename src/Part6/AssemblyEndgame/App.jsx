import React from "react"
import Header from "./components/Header"
import { languages } from "./languages"
/**
 * Goal: Build out the main parts of our app
 * 
 * Challenge: Create the language chips. Use the
 * `languages.js` file to pull in the array of
 * languages to use, which contains the language
 * name, background color, and text color.
 * 
 * Hint for layout: use a flex container that can wrap
 * to layout the languages.
 */
export default function AssemblyEndgame() {
    return (
        <main>
            <Header />
            <section className="game-status">
                <h2 className="status">You Win!</h2>
                <p className="winMessage">Well done! 🎉</p>
            </section>
        </main>
    )
}
