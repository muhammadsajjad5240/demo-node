const { Tasks } = require("../models");
const { StatusCodes } = require("http-status-codes");

const ApiError = require("../utils/ApiError");

/**
 * Create a task
 * @param {Object} payload
 * @returns {Promise<Task>}
 */
const createTask = async (payload) => {
  return Tasks.create(payload);
};

/**
 * Get all tasks
 * @param {Object} payload
 * @returns {Promise<Task[]>}
 */
const getAllTasks = async (payload) => {
  return Tasks.find();
};

/**
 * Get task by id
 * @param {string} id
 * @returns {Promise<Task>}
 */
const getTaskById = async (id) => {
  const task = await Tasks.findById(id);
  if (!task) {
    throw new ApiError(StatusCodes.NOT_FOUND, "Task not found");
  }
  return task;
};

/**
 * Update task by id
 * @param {string} taskId
 * @param {Object} updateBody
 * @returns {Promise<Task>}
 */
const updateTaskById = async (taskId, updateBody) => {
  const task = await getTaskById(taskId);
  if (!task) {
    throw new ApiError(StatusCodes.NOT_FOUND, "Task not found");
  }
  const updatedTask = await Tasks.findByIdAndUpdate(taskId, updateBody, {
    new: true,
  });
  return updatedTask;
};

/**
 * Delete task by id
 * @param {string} taskId
 * @returns {Promise<Task>}
 */
const deleteTaskById = async (taskId) => {
  const task = await getTaskById(taskId);
  if (!task) {
    throw new ApiError(StatusCodes.NOT_FOUND, "Task not found");
  }
  await Tasks.findByIdAndDelete(taskId);
  return task;
};

module.exports = {
  createTask,
  getAllTasks,
  deleteTaskById,
  updateTaskById,
};
