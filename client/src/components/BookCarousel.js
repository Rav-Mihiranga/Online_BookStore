import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BookCarousel.css';
import { Link } from 'react-router-dom';


const BookCarousel = ({ genre }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&maxResults=10`
      );
      setBooks(response.data.items || []);
    };
    fetchBooks();
  }, [genre]);

  return (
    <div className="carousel-section">
      <h2>{genre} Books</h2>
      <div className="carousel-container">
        {books.map((book) => (
          <Link to={`/books/${book.id}`} key={book.id} className="carousel-item">
            <img
              src={book.volumeInfo.imageLinks?.thumbnail}
              alt={book.volumeInfo.title}
            />
            <p>{book.volumeInfo.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default BookCarousel;
