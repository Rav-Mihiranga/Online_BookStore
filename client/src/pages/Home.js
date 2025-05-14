import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';

import './Home.css';

const Home = () => {
  const [featuredBooks, setFeaturedBooks] = useState([]);

  useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=best+books&maxResults=6')
      .then((res) => res.json())
      .then((data) => setFeaturedBooks(data.items || []))
      .catch((err) => console.error('Failed to fetch featured books:', err));
  }, []);

  const addToCart = (book) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({
      title: book.volumeInfo.title,
      image: book.volumeInfo.imageLinks?.thumbnail,
      price: Math.floor(Math.random() * 40) + 10,
      quantity: 1,
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${book.volumeInfo.title} added to cart!`);
  };


  return (
    <main className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Online Bookshop</h1>
          <p>Discover your next favorite book from our vast collection</p>
          <Link to="/explore" className="btn btn-primary">
            Browse All Books
          </Link>
        </div>
      </section>

      {/* Featured Books */}
      <section className="featured-books">
        <h2>Featured Books</h2>
        <div className="books-grid">
          {featuredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onAddToCart={() => addToCart(book)}
            />
          ))}
        </div>
        {featuredBooks.length === 0 && (
          <p className="no-books-message">
            No featured books available. Try searching for something else.
          </p>
        )}
      </section>

      {/* Categories */}
      <section className="categories-section">
        <h2>Browse by Category</h2>
        <div className="categories-grid">
          {['Technology', 'Fiction', 'Science', 'Business'].map((category) => (
            <Link
              key={category}
              to={`/explore?category=${category.toLowerCase()}`}
              className="category-card"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
