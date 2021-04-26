import React, { useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [books, setBooks] = useState(null)
  
  const fetchData = async () => {
    const response = await axios.get(
      "https://www.anapioficeandfire.com/api/books?pageSize=30"
    );
    setBooks(response.data)
    
  }

  return (
    <div className="App">
      <button onClick={fetchData}>click me</button>

      <div className="books">

        {books && books.map((book: any, index: any) =>
        {
          const cleanedDate = new Date(book.released).toDateString();
          const authors = book.authors.join(", ");

          return (
            <div  className="book" key={index}>
              <h3>Book {index + 1}</h3>
              <h2>{book.name}</h2>

              <div className="details" >
                <p >👨: {authors}</p>
                <p>📖: {book.numberOfPages} pages</p>
                <p>🏘️: {book.country}</p>
                <p>⏰: {cleanedDate}</p>
              </div>
            </div>
          );
        }
        )}
        
      </div>

    </div>
  )
}

export default App
