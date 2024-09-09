const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register a new user
const registerUser = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = await User.create({ ...req.body, hashedPassword });
        res.json(newUser);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Login a user
const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const validPassword = await bcrypt.compare(req.body.password, user.hashedPassword);
        if (!validPassword) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).json(err);
    }
};

// Logout a user (if you are managing sessions, this would be handled on the client side)
const logoutUser = (req, res) => {
    // Clear the token on the client side
    res.json({ message: 'Logout successful' });
};

module.exports = { registerUser, loginUser, logoutUser };
