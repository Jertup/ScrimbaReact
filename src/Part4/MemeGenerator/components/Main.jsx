import React from "react";

export default function Main() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    imageUrl: "."
  });

  const [memeData, fetchMemeData] = React.useState([]);


React.useEffect(() => {
  async function getMemes() {
    const res = await fetch("https://api.imgflip.com/get_memes");
    const data = await res.json();
    const memeUrls = data.data.memes.map(meme => meme.url);
    fetchMemeData(memeUrls);
  }
  getMemes();
}, []);

  function handleChange(event) {
    const {name, value} = event.target;
    setMeme(prev => ({...prev, [name]: value}));
  }
  function setMemeImage(event) {
    const randomIndex = Math.floor(Math.random() * memeData.length);
    const randomMemeUrl = memeData[randomIndex];
    setMeme(prev => ({...prev, imageUrl: randomMemeUrl}));
  }

  return (
    <main>
      <div className="form">
        <label>Top Text
          <input
            type="text"
            placeholder="top text"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />
        </label>

        <label>Bottom Text
          <input
            type="text"
            placeholder="bottom text"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </label>
        <button
          onClick={setMemeImage}        
        >Get a new meme image 🖼</button>

      </div>
      <div className="meme">
        {meme.imageUrl && (
          <>
            <img src={meme.imageUrl} alt="Meme" />
            <span className="top">{meme.topText}</span>
            <span className="bottom">{meme.bottomText}</span>
          </>
        )}
      </div>
    </main>
  )
}