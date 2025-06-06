import React from "react";
export default function App() {
    const [isGoingOut, setIsGoingOut] = React.useState(true);
    const handleClick = () => {
        setIsGoingOut(prevState => !prevState);
    }
    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button 
                className="value" 
                onClick={handleClick}
                aria-label="Toggle going out status">
                {isGoingOut ? "Yes" : "No"}
            </button>
        </main>
    )
}
