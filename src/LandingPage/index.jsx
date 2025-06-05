import { createRoot} from 'react-dom/client';
import React, {useState} from 'react';

const root = createRoot(document.getElementById('root'));

function Likes() {
  
  const [likes, setLikes] = useState(0);


  const thresholds = [
    { count: 5, message: "Nice! 5 likes!" },
    { count: 10, message: "Awesome! 10 likes!" },
    { count: 20, message: "Incredible! 20 likes!" }
  ];

  // Find the highest threshold reached
  const currentThreshold = thresholds
    .slice()
    .reverse()
    .find(t => likes >= t.count);

  const handleClick = () => {
    setLikes(likes + 1);
  };

  return(
    <div>
      <button onClick={handleClick}>
        Likes: {likes}
      </button>
      {currentThreshold && (
        <div style={{marginTop: '10px', color: 'green'}}>
          {currentThreshold.message}
        </div>
      )}
    </div>
  )
}

function ControlledInput() {
  const [value, setValue] = useState('');

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

function List() {
  return (
    <div>
      <ol>
        <li>excited to learn</li>
        <li>react or something</li>
        <li>idk</li>
      </ol>
    </div>
  )
}

root.render(
  <>
  <h1>Hello !</h1>
  <Likes />
  <br></br>
  <ControlledInput />
  <br></br>
  <List />
  </>
  ) 