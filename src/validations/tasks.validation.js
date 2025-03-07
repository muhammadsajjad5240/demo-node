const Joi = require("joi");

const createTask = {
  body: Joi.object().keys({
    taskName: Joi.string().required(),
  }),
};

const updateTask = {
  params: Joi.object().keys({
    taskId: Joi.string().required(),
  }),
  body: Joi.object()
    .keys({
      taskName: Joi.string().required(),
    })
    .min(1),
};

const deleteTask = {
  params: Joi.object().keys({
    taskId: Joi.string().required(),
  }),
};

module.exports = {
  createTask,
  updateTask,
  deleteTask,
};
