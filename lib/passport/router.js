const router = require('express').Router();

const userAuth = require('./');

module.exports = passport => {
    return router
        .use(passport.initialize())
        .use(passport.session())
        .use(userAuth(passport));
};