const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');

router.get('/profile', verifyToken, (req, res) => {
  res.json({ message: 'Welcome to your profile!', user: req.user });
});

module.exports = router;
