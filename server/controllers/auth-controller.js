const { User } = require('../models');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');


const registerUser = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = await User.create({ ...req.body, hashedPassword });
        res.json(newUser);
    } catch (err) {
        res.status(500).json(err);
    }
};

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

        req.session.userId = user._id; // Store user ID in session
        res.json({ message: 'Login successful' });
    } catch (err) {
        res.status(500).json(err);
    }
};

const logoutUser = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json({ message: 'Logout successful' });
    });
};

module.exports = { registerUser, loginUser, logoutUser };

