import Header from './components/Header.jsx';
import Entry from './components/entry.jsx';
import data from './data.js';

// Simplifying the App component to render the Header and the mapped location data
function App() {
  // Mapping the location data into an array of Entry components instead of hardcoding each one
const locationData = data.map((item) => (
  <Entry
    key={item.id}
    {...item}
  />
));
// Returning the Header and the mapped Entry components
  return (
    <>
      <Header />
      {locationData}
    </>
  )
}
export default App;