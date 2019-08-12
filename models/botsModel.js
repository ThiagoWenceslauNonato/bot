const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

let botsSchema = new Schema({
    id: String,
    name: String
})

module.exports = mongoose.model('bots', botsSchema, 'bots');