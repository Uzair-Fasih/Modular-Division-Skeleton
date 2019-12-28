const start = (server, components) => {
  var io = require('socket.io')(server);
  let sendUpdates = false
  let currentTimestamp = Date.now()
  io.on('connection', socket => {
    sendUpdates = true
    socket.emit('restart', { timestamp: currentTimestamp, components })
    socket.on('disconnect', function () {
      sendUpdates = false
    });
  });
}

module.exports = { start }