import "./styles.css";
//import { Greeting, Goodbye } from "./Greeting";
import Profile from "./Profile";
import { people } from "./data";
import NavBar from "./NavBar";
import Oven from "./Oven";

// this should be in another file, keep App.js clean
// function Greeting() {
//   let name = "chalk";
//   return (
//     <div>
//       <p>Hello world</p>
//       <p>Hello {name} </p>
//     </div>
//   );
// }

// this should be in another file, keep App.js clean
// function NavBar() {
//   return <nav>My Logo</nav>;
// }

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <p>These are amazing people</p>

      <Oven />

      {people.map((person) => (
        <Profile name={person.name} imageId={person.imageId} />
      ))}
    </div>
  );
}

/*
<Profile name="Lin Lanying" imageUrl="https://i.imgur.com/1bX5QH6.jpg" />
      <Profile
        name="Gregorio Y. Zara"
        imageUrl="https://i.imgur.com/7vQD0fPs.jpg"
      />
      <Profile name="Hedy Lammar" imageUrl="https://i.imgur.com/MK3eW3As.jpg" />

      
      
*/
