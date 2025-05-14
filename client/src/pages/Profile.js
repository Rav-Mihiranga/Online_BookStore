import React from 'react';
import './Profile.css';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    return <p style={{ padding: '2rem' }}>Please login to view your profile.</p>;
  }

  return (
    <div className="profile-container">
      <h2>👤 User Profile</h2>
      <div className="profile-box">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
};

export default Profile;
