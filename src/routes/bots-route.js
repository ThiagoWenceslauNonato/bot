'use strict';

const express = require('express');
const router = express.Router();
const bots = require('../controllers/botsController.js');

router.get('/bots', bots.get);
router.get('/bots/:id', bots.getById);
router.post('/bots', bots.post);
router.put('/bots/:id', bots.put);
router.delete('/bots/:id', bots.delete);

module.exports = router;