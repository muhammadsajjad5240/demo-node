const Joi = require("joi");

const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    name: Joi.string().required(),
  }),
};

module.exports = {
  createUser,
};
