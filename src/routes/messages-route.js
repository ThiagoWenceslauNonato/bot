'use strict';

const express = require('express');
const router = express.Router();
const messages = require('../controllers/messagesController.js');

router.get('/messages', messages.get);
router.get('/messages/:id', messages.getById)
router.get('/messages/:conversationId', messages.getByConversatioId)
router.post('/messages', messages.post);

module.exports = router;