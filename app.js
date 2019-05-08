var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');

const usersRouter = require('./routes/usersRouter');
const shopRouter = require('./routes/shopRouter');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/project4', { useNewUrlParser: true });

var app = express();

app.set('trust proxy', 1);
app.use(session({
  secret: 'snoop dog',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/', usersRouter);
app.use('/api/shop/', shopRouter);

module.exports = app;
