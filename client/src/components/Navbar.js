import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  // Safely retrieve and parse user data from localStorage
  const storedUser = localStorage.getItem('user');
  const user = storedUser && storedUser !== "undefined" ? JSON.parse(storedUser) : null;

  return (
    <nav className="navbar" style={{ color: 'white' }}>
      <div className="logo">📚 BookNest</div>

      <div className="navbar-links">
        <Link to="/explore" style={{ color: 'white' }}>Books</Link>
        <Link to="/" style={{ color: 'white' }}>Home</Link>
        {!user && <Link to="/login" style={{ color: 'white' }}>Login</Link>}
        {!user && <Link to="/register" style={{ color: 'white' }}>Register</Link>}
        {user && <Link to="/profile" style={{ color: 'white' }}>👤 Profile</Link>}
        {user && <Link to="/cart" style={{ color: 'white' }}>🛒 Cart</Link>}
      </div>

      {user && <div className="navbar-user">Hi, {user.username}</div>}
    </nav>
  );
};

export default Navbar;
