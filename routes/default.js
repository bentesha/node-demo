const express = require('express')

const router = express.Router()

router.get('/', (request, response) => {
  customer = {
    id: '23232',
    firstName: 'Alex',
    lastName: 'John'
  }
  response.render('default', { customer })
})

module.exports = router