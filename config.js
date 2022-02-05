
const { config } = require('dotenv')

// Load configurations from .evn file
config()

module.exports = {
  port: process.env.PORT,
  sql: {
    filename: process.env.SQLITE_FILE_NAME
  }
}