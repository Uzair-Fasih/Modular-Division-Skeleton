const express = require('express')
const path = require('path')

let components = []
require('./division/webcomponent').register(components)
const socket = require('./division/socket')

const app = express();
app.use('/static', express.static(path.join(__dirname, 'src/assets')))
app.use(express.static(path.join(__dirname)))
app.set('port', 8000)
const server = app.listen(app.get('port'), () => {
  console.log(`Express running @ PORT ${server.address().port}`)
})

socket.start(server, components)
