const express = require("express")
var app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/test', (req, res) => {
  res.send('Test')
  console.log('connectting')
})

var server = app.listen(8081, function() {
  var port = server.address().port
  console.log('server is listent at: ' + port)
})

