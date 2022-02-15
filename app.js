const express = require('express')
const morgan = require('morgan')
const routes = require('./routes')
const moment = require('moment')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('tiny'))

// Configure view engine
app.set('view engine', 'pug')
app.set('views', './views')

app.locals.utils = {
  moment,
  date: {
    today: () => moment().format('YYYY MM DD')
  }
}


// Register application routes
app.use(routes)

// Other application configuration goes here

module.exports = app