const express = require('express');
const router = express.Router();
const { check } = require('../controllers/session.controller');
var { verifySession } = require('supertokens-node/recipe/session/framework/express');

router.get('/', verifySession(), check);

module.exports = router;
