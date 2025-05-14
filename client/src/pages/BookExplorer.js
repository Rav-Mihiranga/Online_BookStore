import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookExplorer.css';

const genres = ['Fiction', 'Technology', 'Romance', 'Science', 'History'];

const BookExplorer = () => {
  const [selectedGenre, setSelectedGenre] = useState('Fiction');
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('title');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=subject:${selectedGenre}&maxResults=20`
        );
        setBooks(res.data.items || []);
      } catch (err) {
        console.error('Failed to fetch books:', err);
      }
    };
    fetchBooks();
  }, [selectedGenre]);

  const filteredBooks = books
    .filter((book) =>
      book.volumeInfo.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === 'title') {
        return a.volumeInfo.title.localeCompare(b.volumeInfo.title);
      } else if (sortOption === 'date') {
        return (
          new Date(b.volumeInfo.publishedDate) -
          new Date(a.volumeInfo.publishedDate)
        );
      }
      return 0;
    });

  return (
    <div className="explorer-container">
      <h2>📚 Explore Books</h2>

      <div className="controls">
        <select onChange={(e) => setSelectedGenre(e.target.value)} value={selectedGenre}>
          {genres.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
          <option value="title">Sort by Title</option>
          <option value="date">Sort by Date</option>
        </select>
      </div>

      <div className="book-grid">
        {filteredBooks.map((book) => {
          const info = book.volumeInfo;
          return (
            <div key={book.id} className="book-card">
              <img src={info.imageLinks?.thumbnail} alt={info.title} />
              <h4>{info.title}</h4>
              <p>{info.authors?.join(', ')}</p>
              <p className="date">{info.publishedDate}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookExplorer;
