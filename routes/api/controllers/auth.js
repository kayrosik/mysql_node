const {sequelize, User} = require('../../../models');

function login(passport) {
    return (req, res, next) => {
        passport.authenticate('local', function(err, user, info) {
            if (err) { return next(err); }
            if (!user) {
              return res.json({status: 'error', message: info.message});
            }
            req.logIn(user, function(err) {
              if (err) { return next(err); }
              return res.json({status: 'ok'});
            });
          })(req, res, next);
    }
}

function register(passport) {
    return async (req, res, next) => {
      if (!User.isValidPassword(req.body.password)) {
        return res.json({status: 'error', message: 'Password must be 8 or more characters'}); 
      }
  
      if (!User.isValidEmail(req.body.email)) {
        return res.json({status: 'error', message: 'Invalid email'}); 
      }
  
      let user;
      let transaction;
      try {
        transaction = await sequelize.transaction();
        
        const salt = User.generateSalt();
        user = await User.create({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          password: User.hashPassword(req.body.password, salt),
          salt,
        }, {transaction});

        await transaction.commit();
      } catch (err) {
        if (transaction) {
          await transaction.rollback();
        }

        return res.json({status: 'error', message: 'Email address already exists'});
      }
  
      if (user) {
        passport.authenticate('local', (err, user, info)=> {
          if (err) { return next(err); }
          if (!user) {
            return res.json({status: 'error', message: info.message});
          }
          req.logIn(user, function(err) {
            if (err) { return next(err); }
            return res.json({status: 'ok'});
          });
        })(req, res, next);
      }
    }
}

function logout(req, res, next) {
    req.logout();
    res.redirect('/');
}

module.exports = {
    login,
    logout,
    register,
};