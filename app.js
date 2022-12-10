var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var companyRouter = require('./routes/company');
var test_route = require('./routes/test_route')
var staffRoute = require('./routes/staff')

var app = express();

mongoose.connect('mongodb+srv://superdev:tTwsQ4xgId2z0r8B@2013110529-got.b05ljpd.mongodb.net/restfulapi?retryWrites=true&w=majority' , {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/company' , companyRouter);
app.use('/test' , test_route)
app.use('/staff' , staffRoute)

module.exports = app;