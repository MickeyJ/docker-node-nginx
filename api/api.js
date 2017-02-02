const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');

const api = express();

api.use(cors());
api.use(logger('dev'));
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: false }));

routes(api);

api.get('/favicon.ico', function(req, res) {
  res.status(204).send();
});

api.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

api.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.api.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = api;
