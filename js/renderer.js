const io = require('socket.io-client')
const CONSTANTS = require('./const')
const socket = io.connect('http://localhost:' + CONSTANTS.PORT)
const theLight = document.getElementById('the-light')

socket.on('init', (data) => {
  console.log(data.message)
})

socket.on('ldr', (data) => {
  let opacity = data.opacity
  if( opacity < 85 ) {
    opacity = 0
  }
  theLight.style.opacity = opacity / 100
})
