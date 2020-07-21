const localAuthStategy = require('./strategy/local');

module.exports = passport => {
    return (req, res, next) => {
        passport.serializeUser((user, done) => done(null, user));
        passport.deserializeUser((user, done) => done(null, user));

        passport.use(localAuthStategy);

        next();
    };
}; 