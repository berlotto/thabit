var db = require('../dbconfig.js');

exports.get = function(callback){
	db.Config.find({active:true}, function(error, config){
		if(error || !config){
			callback({error:"Cannot return the configuration"});
		}else{
			callback(config);
		}
	});
};

exports.post = function(callback){

	db.Config.find({active:true}, function(error, config){
		if(error || !config){
			callback({error:'Cannot retrieve the actual config'});
		}else{

			config.active = false;
			config.save()

			activeConfig = new Config(config);
			activeConfig._id = undefined;
			// set the properties at config...

			// set properties end
			activeConfig.save()

			callback(activeConfig);

		}
	});

};