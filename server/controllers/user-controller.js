const { User } = require('../models');

module.exports = {
  async getAllUsers(req, res) {
    const allUser = await User.find({});

    if (!allUser) {
      return res.status(400).json({ message: 'No user found' });
    }
    res.status(200).json(allUser);
  },
};