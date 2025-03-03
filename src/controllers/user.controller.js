const { StatusCodes } = require("http-status-codes");
const catchAsync = require("../utils/catchAsync");
const { userService } = require("../services");

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(StatusCodes.CREATED).send({ user });
});

const getAllUser = catchAsync(async (req, res) => {
  const users = await userService.getAllUsers();
  res.status(StatusCodes.OK).send({ data: users });
});

module.exports = {
  createUser,
  getAllUser,
};
