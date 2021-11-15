const express = require('express');
const router = express.Router();
const { verifySession } = require("supertokens-node/recipe/session/framework/express");
const { create, list } = require('../controllers/posts.controller');

router.post('/create', verifySession(), create);
router.get('/list/:email', list);

module.exports = router;
