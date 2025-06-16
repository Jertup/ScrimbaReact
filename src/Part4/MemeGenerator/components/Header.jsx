const trollFace = new URL("../images/troll-face.png", import.meta.url)
export default function Header() {
    return (
        <header className="header">
            <img 
                src={trollFace} 
            />
            <h1>Meme Generator</h1>
        </header>
    )
}