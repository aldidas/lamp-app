const express = require('express')
const socket = require('socket.io')
const jfive = require('johnny-five')
const http = require('http')

const CONSTANTS = require('./const')

module.exports = () => {
  const app = express()
  const server = http.createServer(app)
  const io = new socket(server)
  const port = process.env.PORT || CONSTANTS.PORT
  const board = new jfive.Board()

  // on Socket.io connection
  io.on('connection', (client) => {
    client.emit('init', { message: 'Server - Client connected, Socket.IO works.' })

    // on Arduino Board ready
    board.on('ready', () => {

      // create an LDR sensor object
      const ldr = new jfive.Sensor({
    		pin: 'A2',
    		freq: 250
    	})

      // send data to client if get new value from the sensor
      ldr.on('data', () => {
        let data = {
          opacity: ldr.scaleTo(0, 100)
        }
        client.emit('ldr', data)
      })

    })

  })

  // make server listen to the preconfigured port
  server.listen(port)
}
