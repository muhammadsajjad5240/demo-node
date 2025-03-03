const { User } = require("../models");
const { StatusCodes } = require("http-status-codes");

const ApiError = require("../utils/ApiError");

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
  // Check if email already exists
  const existingUser = await User.findOne({
    email: userBody.email,
  });

  if (existingUser) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Email already taken");
  }

  // Create a new user
  const user = await User.create(userBody);

  return user;
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getUserByEmail = async (email) => {
  const user = await User.findOne({ email });
  return user;
};

/**
 * Get user by id
 * @param {string} userId
 * @returns {Promise<User>}
 */
const getUserById = async (userId) => {
  const user = await User.findById(userId);

  return user;
};

/**
 * Get all uses
 * @returns {Promise<Users>}
 */

const getAllUsers = async () => {
  const user = await User.find();

  return user;
};

module.exports = {
  getUserById,
  createUser,
  getUserByEmail,
  getAllUsers,
};
