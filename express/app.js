var express        = require('express'),
    path           = require('path'),
    favicon        = require('serve-favicon'),
    logger         = require('morgan'),
    cookieParser   = require('cookie-parser'),
    bodyParser     = require('body-parser'),
    lessMiddleware = require('less-middleware'),
    serverless     = require('serverless-http'),
    config         = require('./lib/config');

var app = express(),
    router = require('./lib/router'),
    bootstrapPath = path.join('bower_components', 'bootstrap');

// view engine setup
app.set('views', path.join('lib', 'views'));
app.set('view engine', 'mu');
app.set('layout', 'layouts/default');
app.set('partials', config.partials);
app.engine('mu', require('hogan-express'));

app.use(favicon(path.join('public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(lessMiddleware(path.join('source', 'less'), {
  debug: app.get('env') === 'development',
  force: app.get('env') === 'development',
  preprocess: {
    path: function (pathname, req) {
      return pathname.replace('stylesheets/', '');
    }
  },
  dest: 'public',
  parser: {
    paths: [path.join(bootstrapPath, 'less')],
  }
}));
app.use(express.static('public'));
app.use(express.static('bower_components'));
app.use('/fonts', express.static(path.join(bootstrapPath, 'fonts')));
app.use('/templates', express.static(path.join('lib', 'views', 'templates')));
// app.use(router);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    if (err && err.status === 404) {
      res.status(404);
      res.render('404', config.mainPage);
    } else {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    }
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  if (err && err.status === 404) {
    res.status(404);
    res.render('404', config.mainPage);
  } else {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  }
});

app.use('/.netlify/functions/server', router);  // path must route to lambda

// var httpPort = (parseInt(process.env.PORT) || 45100);
// app.listen(httpPort);
module.exports = app;
module.exports.handler = serverless(app);
