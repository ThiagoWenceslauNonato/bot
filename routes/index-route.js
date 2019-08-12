'use strict';

const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.2"
    });
});

router.use('bots', require('../routes/bots-route'))
router.use('messages', require('../routes/messages-route'))

module.exports = router;