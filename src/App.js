import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';
import Header from './Components/Header';
import useFetch from './Components/useFetch';

function App() {

  const [data] = useFetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")

  return (
    <div className="App">
      <Header/>
      {data.map((e, i)=>{
        return <h1 key={i}>{e.firstName}</h1>
      }
      )}
    </div>
  );
}

export default App;
