'use strict';
const mongoose = require('mongoose');
let Messages = require('../models/messagesModel.js')

exports.get = async(data) => {
    let res = await Messages
    .find({});
    return res;
}

exports.create = async(data) => {
    let messages = new Messages(data);
    await messages.save();
}

exports.getById = async(id) => {
    let res = await Bots
        .findById(id);
    return res;
}

exports.getByConversatioId = async(conversationId) => {
    let res = await Bots
        .findById(conversationId);
    return res;
}