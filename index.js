// this is a simple server to run the slack command handler
const express = require('express')
const handler = require('./googl')
const bodyParser = require('body-parser')
const port = 3000

const server = express()
server.use(bodyParser.urlencoded({extended: true}))

server.post('/', handler)

server.listen(port)
console.log('listening on port', port)
