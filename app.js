const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const createError = require('http-errors');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');
const handlebars = require('express-handlebars');
const User = require('./models/users');
const indexRouter = require('./routes/index');
const filmsRouter = require('./routes/films');
const usersRouter = require('./routes/users');

// Подключаем mongoose.
mongoose.connect('mongodb+srv://datauser:neJNDDYBoEGvopZ6@cluster0-qyjcg.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const hbs = handlebars.create({
  defaultLayout: 'layout',
  extname: 'hbs',
  layoutsDir: path.join(__dirname, 'views'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
});

// view engine setup
app.engine('hbs', hbs.engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

<<<<<<< HEAD
app.use(async function (req, res, next) {
  const User = require('../models/users');
=======
// middleware на проверку кукисов
app.use(async function (req, res, next) {
>>>>>>> b5419b1e7e2bbac1371e6a3763f737f3b88f6ca7
  if (req.cookies.cookie) {
    let user = await User.findOne({ key: req.cookies.cookie })
    if (user) {
      req.isLogged = true
    } else {
      req.isLogged = false
    }
  } else {
    req.isLogged = false
  }
  next()
})
app.use('/', indexRouter);
app.use('/films', filmsRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
