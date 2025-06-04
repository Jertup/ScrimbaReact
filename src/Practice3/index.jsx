import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

function App() {
  const firstName = "Joe";
  const lastName = "Doe";

  const now = new Date();
  const day = now.toLocaleDateString(undefined, { weekday: 'long' });
  const hour = now.getHours();
  const numDay = now.getDate();
  const minute = now.getMinutes();
  const month = now.toLocaleString(undefined, { month: 'long' });
  let timeofDay;
  if (hour < 12) {
    timeofDay = "morning";
  } else if (hour < 18) {
    timeofDay = "afternoon";
  } else {
    timeofDay = "evening";
  }
  let getDaySuffix = (num) => {
    switch (num) {
      case 1:
      case 21:
      case 31:
        return 'st';
      case 2:
      case 22:
        return 'nd';
      case 3:
      case 23:
        return 'rd';
      default:
        return 'th';
    }
  };
  const daySuffix = getDaySuffix(numDay);

  return (
    <>
      <h1>Hello {firstName} {lastName}</h1>
      <h2>It is currently {day} the {numDay}{daySuffix} of {month}, {hour}:{minute}</h2>
      <h2>Good {timeofDay}</h2>
    </>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);