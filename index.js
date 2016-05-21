var express = require('express');
var app = express();

app.get('/', function (req, res) {
      res.send('Hello World!');
});

app.listen(process.env.PORT, process.env.IP, function () {
      console.log('Example app listening on port ' + process.env.PORT + " IP: " + process.env.IP);
});
