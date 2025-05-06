const express = require('express');
const { register, login } = require('../controllers/authController.js');

const router = express.Router();

// Route: POST /api/auth/register
router.post('/register', register);

// Route: POST /api/auth/login
router.post('/login', login);

module.exports = router;
