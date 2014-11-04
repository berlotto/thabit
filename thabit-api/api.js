/* thabit-api  */

var app = require('./appconfig.js')
  , validator = require('validator')
  , userController = require('./controllers/userController.js')
  , frameController = require('./controllers/frameController.js')
  , fieldController = require('./controllers/fieldController.js')
  , dataController = require('./controllers/dataController.js')
  , profileController = require('./controllers/profileController.js')
  , configController = require('./controllers/configController.js');


app.get('/', function(req, res) {
	
	res.end('THABIT RESTful API ON!');

});

