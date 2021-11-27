const Joi = require('joi');
const { jsonValidate } = require('../../utils')

module.exports  = Joi.object({
  type: Joi.string().default('json'),
  code: Joi.number().integer().default(200),
  answer: Joi.string().custom(jsonValidate).default({ status: 'OK' })
});

