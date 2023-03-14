import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';
import Header from './Components/Header';

const reducer = (state, action) =>{
  console.log("state: ", state)
  console.log("action: ", action)
  switch (action.type) {
    case "INC":
      return state + 1;
    
    case "DEC":
      return state - 1;
    case "MUL":
      return state * 2;
    case "RES":
        return state * 0;
    default:
      return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, 0)

  return (
    <div className="App">
      <Header/>
      <h1>{state}</h1>
      <button onClick={()=>dispatch({type: "INC"})}>Increment</button>
      <button onClick={()=>dispatch({type: "DEC"})}>Decrement</button>
      <button onClick={()=>dispatch({type: "MUL"})}>Multiply</button>
      <button onClick={()=>dispatch({type: "RES"})}>Reset</button>
    </div>
  );
}

export default App;
