import './App.css';
import CompA from './Components/CompA';
import Header from './Components/Header';
import { useState } from 'react';
import { createContext } from 'react';

const AppContext = createContext();
const AppCntxt = createContext();

function App() {

  const [name, setName] = useState("Swapnil Nyayade")
  const [data, setData] = useState({age: 22, post: "Associate Software Engineer"})
  const [arr, setArr] = useState(['red', 'green', 'blue'])

  return (
    <AppCntxt.Provider value={arr}>
      <AppContext.Provider value={{name, data}}>
      <div className="App">
        <Header/>
        <CompA data={name} />
      </div>
    </AppContext.Provider>
    </AppCntxt.Provider>
  );
}

export default App;
export {AppContext, AppCntxt}