import React, { useState } from 'react'
import './App.css'
import SearchMovies from "./Search"

function App() {
// api key: 32576884f9fa3de06a978f4f97fe97c3
  // sample request: https://api.themoviedb.org/3/movie/550?api_key=32576884f9fa3de06a978f4f97fe97c3
  // read access token: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjU3Njg4NGY5ZmEzZGUwNmE5NzhmNGY5N2ZlOTdjMyIsInN1YiI6IjYwODEzNmFiNjVlMGEyMDAzZmI2MGZkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OLHNgqeu6TsGu2OXLDuyO8Ob9nne_JdDbPpIo8VqZYc
  return (
    <div className="container">
      <h1 className="title">REACT MOVIE SEARCH APP</h1>
      <SearchMovies />
    </div>
  )
}

export default App
