var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
var config =require('./config/index')
//passport
const passport = require('passport')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var companyRouter = require('./routes/company');
var test_route = require('./routes/test_route')
var staffRoute = require('./routes/staff')
var shop_route = require('./routes/shop.js')

const errorHandler = require('./middleware/errorHandler')

var app = express();

mongoose.connect( config.MONGODB_URI , {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false});

app.use(logger('dev'));
app.use(express.json({
    limit : "50mb"
}));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//passport initialize
app.use(passport.initialize());

//route
app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/company' , companyRouter);
app.use('/test' , test_route)
app.use('/staff' , staffRoute)
app.use('/shop' , shop_route)

app.use(errorHandler)

module.exports = app;