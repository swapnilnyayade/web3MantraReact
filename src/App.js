import './App.css';
import Header from './Components/Header';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Insta from './Components/Insta';
import Snap from './Components/Snap';
import UserDetails from './Components/UserDetails';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path=':userId' element={<UserDetails />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} >
            <Route index element={<Insta />} />
            <Route path='insta' element={<Insta />} />
            <Route path='snap' element={<Snap />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
