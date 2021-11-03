import React, { useState } from 'react'
import './App.css'
import SearchMovies from "./Search"

function App() {
  return (
    <div className="container">
      <h1 className="title">REACT MOVIE SEARCH APP</h1>
      <SearchMovies />
    </div>
  )
}

export default App
