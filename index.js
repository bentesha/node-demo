const app = require('./app')
const Knex = require('knex')
const { Model } = require('objection')
const config = require('./config')
const http = require('http')
const knexfile = require('./knexfile')

const knex = require('./knex')
// Initialize objection library
Model.knex(knex)

// Create HTTP server
const server = http.createServer(app)
server.listen(config.port, () => {
  console.log('Server listening on port:', config.port)
})