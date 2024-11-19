const Joi = require("joi");

const registerJoi = Joi.object({
  insertObject: Joi.object({
    username: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string().required(),
  }),
});

const loginJoi = Joi.object({
  insertObject: Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
});

const readOneJoi = Joi.object({
  id: Joi.number().required,
});

const updateJoi = Joi.object({
  updateData: Joi.object({
    username: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string().required(),
  }),
});

module.exports = {
  registerJoi,
  loginJoi,
  readOneJoi,
  updateJoi,
};
