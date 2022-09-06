var path = require('path');
var express = require('express');
var app = express();
var colors = require('colors');

app.use(express.static('public'));

app.get('/', function(request, response) {
  console.log("oh you'll be fine just send er");
  response.sendFile('demo.html', {root: 'public'}, (err) => {
    response.end();

    if (err) throw(err);
  });
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("example app listening at http://%s:%s".rainbow, host, port);
});
