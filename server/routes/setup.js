var express = require('express');
var router = express.Router();

const { setup } = require('../controllers/setup.controller');

router.get('/', setup);

module.exports = router;
