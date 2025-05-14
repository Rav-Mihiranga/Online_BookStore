import './Register.css';
import React, { useState } from 'react';
import axios from 'axios'; // Import axios to define the api object
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Register = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
  
      alert('Registered successfully');
  
      if (res.status === 200 || res.status === 201) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        navigate('/login'); // Redirect to the home page after successful registration
       
      }
  
      console.log(res.data);
    } catch (err) {
      alert(err.response?.data?.message || 'Registration failed');
    }
  };
  

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="phone"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="register-button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
