import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { useEffect, useRef, useState } from 'react';

function App() {

  const [name, setName] = useState("")
  const count = useRef(0);
  const prevSate = useRef("");
  const inputField = useRef();

  useEffect(()=>{
    count.current = count.current + 1
    prevSate.current = name
  }, [name])

  const formHandler = (e) =>{
    setName(e.target.value)
  }

  const clickHandler = () =>{
   // inputField.current.focus();
   // inputField.current.value = "Swapnil"
   console.log(inputField.current.value)
   inputField.current.style.border = "2px solid red"
  }

  return (
    <div className="App">
      <Header/>
      <input ref={inputField} value={name} onChange={formHandler} type="text" />
      <h2>Application has been rendered {count.current} times.</h2>
      <h2>Prev state was {prevSate.current}</h2>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
}

export default App;
