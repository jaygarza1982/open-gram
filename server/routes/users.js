const express = require('express');
const router = express.Router();
const { verifySession } = require("supertokens-node/recipe/session/framework/express");
const { register } = require('../controllers/users.controller');

router.post('/register', verifySession(), register);

module.exports = router;
