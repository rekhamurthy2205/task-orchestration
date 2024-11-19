const Joi = require('joi');

const insertJoi = Joi.object({
  table: Joi.string(),
  insertObject: Joi.object({
    title: Joi.string().required()
  }),
});

const findJoi = Joi.object({
  table: Joi.string().required(),
  id: Joi.string().required(),
  column: Joi.string().required(),
});

const updateJoi = Joi.object({
  id: Joi.string(),
  column: Joi.string().required(),
  updateData: Joi.object().required(),
});

const deleteJoi = Joi.object({
  id: Joi.string(),
  column: Joi.string().required(),
});

module.exports = {
  insertJoi,
  findJoi,
  updateJoi,
  deleteJoi,
};
