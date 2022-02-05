const express = require('express')
const morgan = require('morgan')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(morgan('tiny'))

// Register application routes
app.use(routes)

// Other application configuration goes here

module.exports = app