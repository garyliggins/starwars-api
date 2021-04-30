import React, {useState} from 'react'
import './App.css';

function App() {

  const [char,setChar] =useState({})
  const [count,setCount] =useState(1)
  const [charList, setCharList] =useState([])

  const getChar = () => {
    console.log("making a request to api")
    fetch(`https://swapi.dev/api/people/${count}/`)
    .then((res) => res.json())
    // .then(res => console.log(res.name))
    .then((res) => {
      setChar(res)
      console.log(res)
      setCharList([...charList, res])
      setCount( count + 1)
    })
    .catch((err) => {
      console.log(err)
    })
    
  }

  return (
      
    <div className="App">
      <h1>Star Wars API</h1>
      <button onClick={getChar}>Click to request a Character</button>
      <h2> Current character</h2>
      <p>Name: {char.name}</p>
      <p>Height: {char.height}</p>
      <p>Gender: {char.gender}</p>

      <div>
        <h2> Previously requested characters</h2>

        <ul>
          {
            charList.map((characters, i) => 
            <li key={i}>{characters.name}</li>
            )
            }
        </ul>
      </div>

    </div>
  );
}

export default App;
