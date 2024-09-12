const User = require('../models/User');

// Fetch all users
const getAllUsers = async () => {
  return await User.find();
};

// Fetch a user by ID
const getUserById = async (id) => {
  return await User.findById(id);
};

// Create a new user
const createUser = async (firstName, lastName, email, password) => {
  const user = new User({ firstName, lastName, email, password });
  return await user.save();
};

// Delete a user by ID
const deleteUserById = async (id) => {
  await User.findByIdAndDelete(id);
  return 'User deleted';
};
module.exports = { getAllUsers, getUserById, createUser, deleteUserById };
