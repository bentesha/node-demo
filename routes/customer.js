
const express = require('express')
const customerService = require('../services/customer-service')

const controller = {}

controller.findAll = async function (request, response) {
  const customers = await customerService.findAll(request.query)
  response.json(customers)
}

controller.findById = async function (request, response) {
  const id = request.params.id
  const customer = await customerService.findById(id)
  if (!customer) {
    return response.sendStatus(404)
  }
  response.json(customer)
}

controller.update = async function (request, response) {
  const id = request.params.id
  let customer = await customerService.findById(id)
  if (!customer) {
    return response.sendStatus(404)
  }
  await customerService.update(id, request.body)
  customer = await customerService.findById(id)
  response.json(customer)
}

controller.create = async function (request, response) {
  const customer = await customerService.create(request.body)
  response.json(customer)
}

controller.delete = async function (request, response) {
  const id = request.params.id
  const customer = await customerService.findById(id)
  if (!customer) {
    return response.sendStatus(404)
  }
  await customerService.delete(id)
  response.sendStatus(200)
}

const router = express.Router()

router.get('/', controller.findAll)
router.get('/:id', controller.findById)
router.post('/', controller.create)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

module.exports = router