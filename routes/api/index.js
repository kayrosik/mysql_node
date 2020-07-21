const router = require('express').Router();

const controllers = require('./controllers/');
const {isAuth} = require('../../lib/passport/middlewares');

module.exports = passport => {
    return router
        .post('/login', controllers.auth.login(passport))
        .post('/register', controllers.auth.register(passport))
        .get('/logout', isAuth, controllers.auth.logout)
        .get('/catalog', controllers.catalog)
        .post('/createOrder', isAuth, controllers.order.createOrder)
        .get('/getOrders', isAuth, controllers.order.getOrders);
}