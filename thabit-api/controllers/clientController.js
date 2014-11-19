var db = require('../dbconfig.js')
  , crypto = require('crypto')
  ;

exports.identifyclient = function(ip, identifier, callback){

	// console.log("At connect",id, identifier);

	if( !ip || !identifier){
		callback({error:"Some information is missing."});
	}else{
		console.log(identifier);
		db.Client.findOne({'identifier':identifier}, function(error, client){
			console.log(error);
			console.log(client);
			if(error || !client){
				callback( {error:"Cannot find this Client"});
			}else{
				
				if(client.ip == ip){

					//Generate the token, save and returns
					var token = crypto.randomBytes(48).toString('hex');
					client.lastToken = token
					client.save(function(error, client){
						if(!error){
							callback({'token':token});
						}else{
							callback({'error':'Cannot generate or save the session token, try again after!'});
						}
					});
					

				}else{
					callback({error:"Some information is not valid. Verify!"});
				}

			}
		});

	}
};


// Method to verify if the received tokens are valid on endpoints headers
exports.verify = function(accessToken, callback){
	db.Client.findOne({lastToken:accessToken}, function(error, client){
		if (error || !clients){
			callback(false, null);
		}else{
			callback(true, client.identifier);
		}
	});
}