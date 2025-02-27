const { StatusCodes } = require("http-status-codes");
const catchAsync = require("../utils/catchAsync");
const { userService } = require("../services");

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(StatusCodes.CREATED).send({ user });
});

module.exports = {
  createUser,
};
