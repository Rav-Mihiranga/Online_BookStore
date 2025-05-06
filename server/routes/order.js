const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const authenticate = require('../middleware/authMiddleware');

// Place an order
router.post('/', authenticate, async (req, res) => {
  try {
    const { book, quantity } = req.body;

    const order = new Order({
      user: req.user.id,
      book,
      quantity
    });

    const savedOrder = await order.save();
    res.status(201).json({ message: 'Order placed successfully', order: savedOrder });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
