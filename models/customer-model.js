
const { Model } = require('objection')

class Customer extends Model {
  static tableName = 'customer'
}

module.exports = Customer