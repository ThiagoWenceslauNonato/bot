'use strict';

const router = require('express').Router();
const botsController = require('../controllers/botsController');

router.get('/', botsController.get);
router.get('/:id', botsController.getById);
router.post('/', botsController.post);
router.put('/:id', botsController.put);

module.exports = router;