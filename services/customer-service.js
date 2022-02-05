const utils = require('../utils')
const Customer = require('../models/customer-model')

const service = utils.createService(Customer)

module.exports = service