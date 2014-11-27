/* thabit-api  */

var app = require('./appconfig.js')
  // , fieldController = require('./controllers/fieldController.js')
  // , dataController = require('./controllers/dataController.js')
  // , profileController = require('./controllers/profileController.js')
  // , configController = require('./controllers/configController.js')
  , userroutes = require('./routes/user.js')
  , clientroutes = require('./routes/client.js')
  , frameroutes = require('./routes/frame.js');

app.use(function (req, res, next) {
  // console.log(req.path, req.headers);

  console.log("---------------------"+req.path+"------");
  if( ! req.path.match( /\/{1}client*\/*|\/{1}/ ) ){  
    console.log("Validating access-token...");
    if('access-token' in req.headers){
      console.log("Have...");
      //Validate Access Token

      //if OK
      // console.log('Time:', Date.now());
      next();

    }else{

      res.json({'error':'Cannot validate your accesstoken'});

    }
  }else{
    console.log("Passando...");
    next();
  }

});

app.use('/client', clientroutes);
app.use('/user', userroutes);
app.use('/frame', frameroutes);

app.get('/', function(req, res) {
	
	res.json({'message':'THABIT RESTful API ON!', 'version':'0.0.1'});

});

