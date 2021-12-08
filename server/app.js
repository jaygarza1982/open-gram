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

// TODO: Replace super tokens with our own go-auth server
// var proxy = require('express-http-proxy');
// app.post('/auth/register', proxy('http://localhost:8080/auth/register'));
// app.post('/auth/login', proxy('http://localhost:8080/auth/login'));
// app.post('/auth/logout', proxy('http://localhost:8080/auth/logout'));
// app.get('/auth/check', proxy('http://localhost:8080/auth/check'));

app.use(middleware());

app.use(errorHandler());

app.use((err, req, res, next) => {
    res.status(500).send("Internal error aa: " + err.message);
});

app.use(logger('dev'));
app.use(express.json({ limit: process.env.MAX_POST_SIZE }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var usersRouter = require('./routes/users');
var postsRouter = require('./routes/posts');

app.use('/api/users', usersRouter);
app.use('/api/posts', postsRouter);
app.use('/api/session', require('./routes/session'));

module.exports = app;
