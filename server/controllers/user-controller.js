const User = require('../models/User');
const bcrypt = require("bcryptjs");

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
  const salt = await bcrypt.genSalt(10);
        const hashed_password = await bcrypt.hash(password, salt);
  const user = new User({ firstName, lastName, email, password:hashed_password });
  return await user.save();
};

// Login
const loginUser = async(email, password) => {
  const user = await User.findOne({email});
  if (!user) {
    throw new Error ("user does not exist")
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw new Error ("invalid password")
  }
  return user
}



// Delete a user by ID
const deleteUserById = async (id) => {
  await User.findByIdAndDelete(id);
  return 'User deleted';
};
module.exports = { getAllUsers, getUserById, createUser, deleteUserById, loginUser};
