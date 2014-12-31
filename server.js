/**
 * Created by Sandeep on 01/06/14.
 */

var express = require('express');
var bodyParser = require('body-parser');
var movies = require(__dirname + '/routes/movieRouter');
var mongoose = require('mongoose');

var app = express();

var dbName='movieDB';

//new app
//
 var connectionString='mongodb://localhost:27017/'+dbName;

mongoose.connect(connectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api', movies);

app.use('/api', express.static(__dirname + '/api'));
app.use('/client', express.static(__dirname + '/client'));
app.use('/lib', express.static(__dirname + '/lib'));


app.get('/', function (req, res) {
  res.sendfile(__dirname + '/client/views/index.html');
});

module.exports = app;

app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
