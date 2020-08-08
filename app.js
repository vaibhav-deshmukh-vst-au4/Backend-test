var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connection = require('./Database/dbConnection');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users.router');
let brandRouter = require('./routes/brand.router');
let vendorRouter = require('./routes/vendor.router');
 let productRouter = require('./routes/product.router');
let categoryRouter = require('./routes/category.route');

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
 app.use('/product',productRouter);
app.use('/category',categoryRouter);
module.exports = app;
