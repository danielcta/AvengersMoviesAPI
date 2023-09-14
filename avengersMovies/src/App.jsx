import { useState } from 'react'
import './components/Card'
import './App.css'
import { useEffect } from 'react'
import { Route } from 'react-router-dom'

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/danielcta/AvengersMovies/main/avengersAPI/avengers_movies.json')
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  return (
    skadjklljklsakdsjal
    <div>
      <h2>Avengers Movies</h2>
      {loading ? (
        <p>Carregando Filmes...</p>
      ) : (
        <div className="movie-list">
          {movies.map((movie, index) => (
            <Card
              key={index}
              moviePoster={movie.poster}
              movieName={movie.name}
              releaseYear={movie.releaseYear}
              movieSinopse={movie.sinopse}
              mainActors={movie.mainActors}
            />
          ))}
        </div>
      )}
    </div>
  );
}


export default App
