'use strict';

const bots = require('../repositories/bots-repositories.js');
let config = require('../db/config');

const get = async(req, res, next) => {
    try {
        let data = await bots.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

const getById = async(req, res, next) => {
    try {
        let data = await bots.getById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

const post = async(req, res, next) => {
    try {
        await bots.create({
            id: req.body.id,
            name: req.body.name
        });
        res.status(201).send({
            message: 'Bot cadastrado com sucesso!'
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

const put = async(req, res, next) => {
    try {
        await bots.update(req.params.id, req.body);
        res.status(200).send({
            message: 'Produto atualizado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

module.exports = {
    get, getById, post, put
}