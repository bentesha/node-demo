const express = require('express')
const customerController = require('./customer')

const router = express.Router()

router.use('/customer', customerController)

module.exports = router

