const express = require('express');
const router = express.Router();
const handlers = require('./handlers');

router.post('/login',handlers.login);
router.post('/signup', handlers.register);

module.exports = router;