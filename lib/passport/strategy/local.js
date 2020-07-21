const LocalStrategy = require('passport-local').Strategy;
const User = require('../../../models').User;
const {AuthError} = require('../../errors');

module.exports = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, async (email, password, done) => {
        let user;
        try {
            user = await User.findOne({where: {email: email}});

            if (!user || !user.correctPassword(password)) {
                throw new AuthError();
            }
        } catch(err) {
            return done(null, false, {message: err.msg});
        }

        return done(null, user);
});