var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connection = require('./Database/dbConnection');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users.router');
let brandRouter = require('./routes/brand.router');
const vendorRouter = require('./routes/vendor.router');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use('/users', usersRouter);
app.use('/brand',brandRouter);
app.use('/vendor',vendorRouter);

module.exports = app;
