import React from 'react';
import './BookCard.css';

const BookCard = ({ book, onAddToCart }) => {
  const info = book.volumeInfo;

  return (
    <div className="book-card">
      <img
        src={info.imageLinks?.thumbnail || 'https://via.placeholder.com/120x180?text=No+Image'}
        alt={info.title}
      />
      <h4>{info.title}</h4>
      <p>{info.authors?.join(', ')}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};

export default BookCard;
