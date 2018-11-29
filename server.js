'use strict';

var sslRedirect = require('heroku-ssl-redirect'),
  express = require('express'),
  app = express();

// enable ssl redirect
app.use(sslRedirect());

app.use(express.static('www'));

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
