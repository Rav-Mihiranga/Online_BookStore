const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware'); // adjust path if needed

// Example protected route
router.get('/profile', authenticateToken, (req, res) => {
  res.json({
    message: 'Protected route accessed successfully',
    user: req.user,
  });
});

module.exports = router;

