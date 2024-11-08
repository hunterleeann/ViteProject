import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { puppyList } from "./data";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  return (
    <>
      <div className="App">
        {puppies.map((puppy) => {
          function handleClick() {
            setFeatPupId(puppy.id);
          }

          return (
            <p onClick={handleClick} key={puppy.id}>
              {puppy.name}
            </p>
          );
        })}
        <p>{featPupId}</p>
      </div>
    </>
  );
}

export default App;
