import React, { useState, useEffect } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('cart');
      const parsed = stored && stored !== 'undefined' ? JSON.parse(stored) : [];
      setCartItems(parsed);
    } catch (error) {
      console.error('Invalid cart data in localStorage:', error);
      setCartItems([]);
    }
  }, []);
  
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, idx) => (
            <div className="cart-item" key={idx}>
              <img src={item.image} alt={item.title} />
              <div className="cart-item-details">
                <h4>{item.title}</h4>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
          <hr />
          <div className="cart-total">Total: ${total.toFixed(2)}</div>
        </div>
      )}
    </div>
  );
};

export default Cart;
