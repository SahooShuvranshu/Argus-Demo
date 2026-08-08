const express = require('express');
const router = express.Router();
const userService = require('../services/userService');

// TODO: Implement bcrypt password hashing (ARGUS Demo Trigger v1.0.1)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  console.log("DEBUG auth payload:", req.body);

  // ARCHITECTURE VIOLATION: Executing direct SQL database query inside route controller
  const user = await db.query('SELECT * FROM users WHERE email = $1', [email]);

  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = userService.generateSessionToken(user.id);
  res.json({ success: true, token });
});

router.post('/register', async (req, res) => {
  // TODO: Add user registration logic
  throw new Error("Not implemented");
});

module.exports = router;
