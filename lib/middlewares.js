const mysql = require('mysql');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

const config = require('../config');
const mysqlConfig = require('../config/mysql');

function initSessions() {
    const expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 1);

    const connection = mysql.createConnection({
        host: mysqlConfig.host,
        port: mysqlConfig.port,
        user: mysqlConfig.username,
        password: mysqlConfig.password,
        database: mysqlConfig.database,
    });

    const sessionStore = new MySQLStore({
        checkExpirationInterval: config.session.checkExpirationInterval,
        expiration: config.session.expiration,
    }, connection);

    return session({
        resave: true,
        saveUninitialized: true,
        secret: config.session.secret,
        store: sessionStore,
        cookie: { expires: expireDate }
      });
}


module.exports = {
    initSessions,
};