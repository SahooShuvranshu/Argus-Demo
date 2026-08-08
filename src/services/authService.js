// Authentication Service Layer
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'demo-secret-key';

async function authenticateUser(email, password) {
  // Delegate user authentication logic to service layer
  if (!email || !password) {
    throw new Error('Email and password required');
  }

  // TODO: Add bcrypt password hashing check
  const token = jwt.sign({ email, role: 'user' }, JWT_SECRET, { expiresIn: '1h' });
  return { success: true, token };
}

async function registerUser(email, password) {
  // TODO: Implement user registration persistence
  return { success: true, message: 'User registered' };
}

module.exports = {
  authenticateUser,
  registerUser,
};
