import './App.css';
import Header from './Components/Header';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';

function App() {
  return (
  
     <BrowserRouter>
        <div className='App'>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='*' element={<Error/>} />
          </Routes>
        </div>
      </BrowserRouter>
   
  );
}

export default App;
