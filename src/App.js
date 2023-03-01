import './App.css';
import { Header } from './components/Header';
import { Movie } from './components/Movie';
import movies from './movies.json'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        {
          movies.map((movie, index) => {
            return (<Movie
              key={index}
              title={movie.Title}
              year={movie.Year}
              img={movie.Poster}
            />)
          })
        }
      </div>
    </div>
  );
}

export default App;
