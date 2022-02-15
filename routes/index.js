const express = require('express')
const customerController = require('./customer')
const defaultController = require('./default')

const router = express.Router()

// Common auth middleware
router.use((request, response, next) => {
  const user = {
    id: '383883',
    name: 'Samuel Mushi'
  }
  response.locals.global = user
  next()
})

router.use('/', defaultController)
router.use('/customer', customerController)

module.exports = router

