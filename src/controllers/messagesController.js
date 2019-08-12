'use strict';

const messages = require('../repositories/messages-repositories.js');
let config = require('../config.js');

exports.get = async(req, res, next) => {
    try {
        let data = await messages.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.post = async(req, res, next) => {
    try {
        await messages.create({
            conversationId: data.conversationId,
            timestamp: moment().subtract(new Date().getTimezoneOffset(), 'minute').format() ,
            from: req.body.from,
            to: req.body.to,
            text: req.body.text
        });
        res.status(201).send({
            message: 'Message cadastrada com sucesso!'
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.getById = async(req, res, next) => {
    try {
        let data = await messages.getById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.getByConversatioId = async(req, res, next) => {
    try {
        let data = await messages.getByConversatioId(req.params.conversationId);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}