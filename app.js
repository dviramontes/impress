
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , Users = require('./routes/users')
  , http = require('http')
  , mongoose = require('mongoose')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

app.get('/', routes.index); // uncommenting this to that 
// we can have an index page, landing page

app.get('/users', Users.list); // and our api will handle
// this next route , take a look at routes/users.js *
app.get('/users/create', Users.createUserForm);
app.post('/users/create/new', Users.createUser);
app.param('name', Users.username);




