const router = require('express').Router();
const { authenticate } = require('../../middleware/auth.middleware');
const { registerUser, loginUser, logoutUser } = require('../../controllers/auth-controller');

// User registration
router.post('/register', registerUser);

// User login
router.post('/login', loginUser);

// User logout
router.post('/logout', authenticate, logoutUser);

module.exports = router;
