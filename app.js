/**
 * Main application file
 */

const express = require('express')
const http = require('http')

const config = require('./config/environment')
const expressConfig = require('./config/express')
const routeConfig = require('./routes')

// Setup server
const app = express()
const server = http.createServer(app)

expressConfig(app)

// Start server
function startServer() {
  server.listen(config.port, config.ip, () => {
    // Routes
    routeConfig(app)

    console.log(
      `Express server listening on ${config.port}, in ${app.get('env')} mode`
    )
  })
}

setImmediate(startServer)

// Expose app
module.exports = app
