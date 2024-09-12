const { User } = require('../models');

const authenticate = async (req, res, next) => {
    if (!req.session.userId) {
        return res.status(401).json({ message: 'Authentication required' });
    }

    try {
        const user = await User.findById(req.session.userId);
        if (!user) {
            return res.status(401).json({ message: 'Invalid session' });
        }

        req.user = user;
        next();
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = { authenticate };
