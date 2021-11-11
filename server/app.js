var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var supertokens = require("supertokens-node");
var Session = require("supertokens-node/recipe/session");
var { verifySession } = require("supertokens-node/recipe/session/framework/express");
var { middleware, errorHandler } = require("supertokens-node/framework/express");
var EmailPassword = require("supertokens-node/recipe/emailpassword");
var mongoose = require('mongoose');

(async () => {
    try {
        const { MONGO_URL } = process.env;

        console.log('Attempting to connect to MongoDB through', MONGO_URL);
        await mongoose.connect(MONGO_URL);

        console.log('Connected to MongoDB successfully.');
    } catch (error) {
        console.log(error);
    }
})();

supertokens.init({
    framework: "express",
    supertokens: {
        connectionURI: "http://open-gram-supertokens:3567",
        apiKey: process.env.API_KEYS,
    },
    appInfo: {
        appName: "open-gram",
        apiDomain: 'http://localhost:4000',
        websiteDomain: 'http://localhost:4000',
    },
    recipeList: [EmailPassword.init(), Session.init()],
});

var app = express();

app.use(middleware());

// custom API that requires session verification
app.get('/api/session', verifySession(), async (req, res) => {
    let session = req.session;
    res.send({
        sessionHandle: session.getHandle(),
        userId: session.getUserId(),
        accessTokenPayload: session.getAccessTokenPayload(),
    });
});

app.use(errorHandler());

app.use((err, req, res, next) => {
    res.status(500).send("Internal error aa: " + err.message);
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var usersRouter = require('./routes/users');

app.use('/api/users', usersRouter);

module.exports = app;
