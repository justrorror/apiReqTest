const Joi = require('joi');
const {
  jsonValidate,
  checkStatusCode
} = require('../../utils')

module.exports  = Joi.object({
  type: Joi.string().default('json'),
  code: Joi.number().custom(checkStatusCode).default(200),
  answer: Joi.string().custom(jsonValidate).default({ status: 'OK' }),
  answerXml: Joi.string()
});

