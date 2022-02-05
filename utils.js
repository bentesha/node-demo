
const shortid = require('shortid')
const moment = require('moment')
const findQuery = require('objection-find')

const formatDate = (date) => moment(date).format('YYYY-MM-DD HH:mm:ss')


exports.createService = function (modelClass) {
  const service = {}

  service.findById = async function (id) {
    return modelClass.query().findById(id)
  }

  service.findAll = async function (query = {}) {
    return await findQuery(modelClass)
      .allowAll()
      .build(query)
  }

  service.update = async function (id, data) {
    delete data.id
    data.updatedAt = formatDate()
    return modelClass.query().where({ id }).update(data)
  }

  service.create = async function (data) {
    data.id = shortid.generate()
    data.createdAt = data.updatedAt = formatDate()
    await modelClass.query().insert(data)
    return service.findById(data.id)
  }

  service.delete = async function (id) {
    return modelClass.query().where({ id }).delete()
  }

  return service
}
