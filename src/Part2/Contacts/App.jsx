/**
 * Challenge:
 * - Create a Cat component in another file
 * - Move one of the contact card articles below into that file
 * - import and render 4 instances of that contact card
 *     - Think ahead: what's the problem with doing it this way?
 */
import Cat from "./components/cat";
function App() {
    return (
        <div className="contacts">
            <Cat 
              img="./images/mr-whiskerson.png"
              name="Mr. Whiskerson"
              phone="(212) 555-1234"
              email="mr.whiskaz@catnap.meow"
            />
            <Cat
                img="./images/fluffykins.png"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Cat
                img="./images/felix.png"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Cat 
                img="./images/pumpkin.png"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
            
        </div>
    )
}

export default App
/*
            <Cat 
              img=""
              name=""
              phone=""
              email=""
            />
*/