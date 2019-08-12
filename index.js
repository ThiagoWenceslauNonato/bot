const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3050
request = require('request');
moment = require('moment');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', require('./routes/index-route.js'))
app.use('/bots', require('./routes/bots-route.js'))
app.use('/messages', require('./routes/messages-route.js'))

app.listen(port, () => {
    console.log("Servidor rodando na porta " + port)
})