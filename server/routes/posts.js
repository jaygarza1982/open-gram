const express = require('express');
const router = express.Router();
const { verifySession } = require("supertokens-node/recipe/session/framework/express");
const { create } = require('../controllers/posts.controller');

router.post('/create', verifySession(), create);

module.exports = router;
