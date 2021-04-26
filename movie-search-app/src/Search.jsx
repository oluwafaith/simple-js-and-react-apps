import React, {useState} from 'react'
import MovieCard from "./MovieCard"
function SearchMovies() {
    const [query, setQuery] = useState("")
    const [movies, setMovies] = useState([])
    
    const searchMovies = async (e) => {
        e.preventDefault()

        const url = `https://api.themoviedb.org/3/search/movie?api_key=32576884f9fa3de06a978f4f97fe97c3&language=en-US&query=${query}&page=1&include_adult=false`;
        
      try {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results)
      } catch (err) {
        console.error(err);
      }

    }

    return (
      <>
        <form className="form" onClick={searchMovies} action="">
          <label htmlFor="query" className="label">
            {" "}
            Movie Name
          </label>
          <input
            type="text"
            name="query"
            placeholder="search here"
            className="input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="button">
            Search
          </button>
        </form>

        <div className="card-list">
          {movies &&
            movies
              .filter((movie) => movie.poster_path)
              .map((movie) => (
                  <MovieCard movie={movie} key={movie.id}/>
              ))}
        </div>
      </>
    );
}

export default SearchMovies
