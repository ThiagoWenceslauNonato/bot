'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let messagesSchema = new Schema({
    conversationId: String,
    timestamp: Date,
    from: String,
    to: String,
    text: String
})

module.exports = mongoose.model('messages', messagesSchema, 'messages');