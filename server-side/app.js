const express = require('express');
const router = express.Router();
const User = require('./clients/src/models/model.js'); 

router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if username already exists
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Username doesn't exist, hash the password
    // You should use bcrypt or a similar library for secure password hashing
    // For example purposes, we'll assume you've hashed the password as 'hashedPassword'

    // Save the user to the database
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Registration failed', error });
  }
});

module.exports = router;
