'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

// Connecta ao banco
mongoose.connect(config.connectionString, { useNewUrlParser: true });

// Carrega os Models
let Bots = require('./models/botsModel');
let Messages = require('./models/messagesModel');


// Carrega as Rotas
let indexRoute = require('./routes/index-route.js');
let botsRoute = require('./routes/bots-route.js');
let messagesRoute = require('./routes/messages-route.js');

app.use(bodyParser.json({ limit: '5mb'}
));

app.use(bodyParser.urlencoded({ extended: false }
));

app.use('/', indexRoute);
app.use('/bots', botsRoute);
app.use('/messages', messagesRoute);

module.exports = app;