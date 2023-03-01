import './App.css';
import { Header } from './components/Header';
import { Movie } from './components/Movie';
import movies from './movies.json'

function App() {

  let login = true

  //If-Else in javascript
  // if(login == true){
  //   return <h1>You are loged in</h1>
  // }

  return (
    <div className="App">

      /* Ternary operator in jSX */
      {
        login == false ? <Header /> : <h1 style={{ color: 'red' }}>This is not header</h1>
      }

      /* If-Else in jSX */
      {
        (() => {
          if (login == true) return <h1 style={{ color: 'red' }}>This is If statement</h1>
          else if (login == 'login') return <h1 style={{ color: 'red' }}>This is Else If statement</h1>
          else return <h1 style={{ color: 'red' }}>This is Else statement</h1>
        })()
      }

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
