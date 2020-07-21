const passportRouter = require('./lib/passport/router');
const middlewares = require('./lib/middlewares');

module.exports = (app, passport) => {
    app.use([
        middlewares.initSessions(),
        passportRouter(passport),
    ]);
}