import { useState } from 'react'
import './components/Card'
import './App.css'
import { useEffect } from 'react'
import { Route } from 'react-router-dom'

function App() 
const [ movies, setMovies ] = useState([])

useEffect(() => {
    fetch('https://github.com/danielcta/AvengersMovies/edit/main/avengersAPI/avengers_movies.json')
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
      });
  }, []);


{  
return(
<Route>
<Route path="/poster" element={<moviePoster movies={movies} />} />
<Route path="/name" element={<movieName movies={movies} />} />
<Route path="/releaseYear" element={<releaseYear movies={movies} />} />
<Route path="/sinopse" element={<movieSinopse movies={movies} />} />
<Route path="/mainActors" element={<mainActors movies={movies} />} />
</Route>
)




}

export default App
