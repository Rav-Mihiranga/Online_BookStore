const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const authenticateToken = require('../middleware/authMiddleware');

// CREATE a new book
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { title, author, price } = req.body;
    const book = new Book({ title, author, price, addedBy: req.user.id });
    await book.save();
    res.status(201).json({ message: 'Book added successfully', book });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// READ all books
router.get('/', authenticateToken, async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// UPDATE a book by ID
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json({ message: 'Book updated successfully', book: updatedBook });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// DELETE a book by ID
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json({ message: 'Book deleted successfully', book: deletedBook });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
