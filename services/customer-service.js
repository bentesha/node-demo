const utils = require('../utils')
const Customer = require('../models/customer-model')
const Joi = require('joi')

const schema = Joi.object({
  name: Joi.string().require(),
  phone: Joi.string().required(),
  email: Joi.string().email().optional(),
  createdAt: Joi.strip(),
  updatedAt: Joi.strip()
})

const service = utils.createService(Customer, schema)

module.exports = service