const express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const routes = require('./routes/api/');

const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

require('./app')(app, passport);
app.use('/api', routes(passport));

app.listen(process.env.port || 3000);

module.exports = app;