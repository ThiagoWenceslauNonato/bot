'use strict';

const router = require('express').Router();
const messagesController = require('../controllers/messagesController.js');

router.get('/', messagesController.get);
router.get('/:id', messagesController.getById)
router.get('/:conversationId', messagesController.getByConversatioId)
router.post('/', messagesController.post);

module.exports = router;