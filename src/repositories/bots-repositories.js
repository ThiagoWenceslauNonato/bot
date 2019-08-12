'use strict';
const mongoose = require('mongoose');
let Bots = require('../models/botsModel.js')

exports.get = async () => {
    let res = await Bots
        .find({});
    return res;
}

exports.getById = async (id) => {
    let res = await Bots
        .findById(id);
    return res;
}

exports.create = async (data) => {
    let bots = new Bots(data);
    await bots.save();
}

exports.update = async (id, data) => {
    await Bots
        .findByIdAndUpdate(id,
            {
                $set: {
                    name: data.name
                }
            });
}

exports.delete = async (id) => {
    await Bots
        .findOneAndRemove(id);
}