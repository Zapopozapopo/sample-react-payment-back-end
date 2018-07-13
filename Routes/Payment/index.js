const express = require('express');
const router = express.Router();
const handlers = require('./handlers');
const auth = require('../Auth/handlers');

router.post('/test',auth.verifyToken,handlers.test);

module.exports = router;