const express = require('express')
const socket = require('socket.io')
const app = express()
const server = app.listen(5000, () => {
  console.log('server started')
})
const io = socket(server, {
  cors: {
    origin: "*"
  }
})
io.on('connection', socketClient => {
  console.log(socketClient.id)
  socketClient.on('MESSAGE', clientdata => {
    console.log(clientdata)
    socketClient.emit('Client', clientdata)
  })
  socketClient.on('BROADCAST', clientdataBroadcast => {
    console.log(clientdataBroadcast)
    io.emit('sendmsgtoall', clientdataBroadcast)
  })
  socketClient.on('EXCLUSIVEBROADCAST', clientdataBroadcast => {
    console.log(clientdataBroadcast)
    socketClient.broadcast.emit('EXCLUSIVEBROADCAST', clientdataBroadcast)
  })
  socketClient.on('JOINROOM', (ClientRoom) => {
    console.log(ClientRoom)
    socketClient.join(ClientRoom)
    io.to(ClientRoom).emit('JOINROOMSUCCESS', 'joined success')
    socketClient.on('sendroommessage', (clientdata) => {
      io.to(ClientRoom).emit("sendtoroomMessage",clientdata)
    })
  })
})

app.get('/', (req, res) => {
  res.send('home page')
})
