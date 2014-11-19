var db = require('../dbconfig.js');

exports.list = function(callback){
	db.Profile.find({}, function(error, profiles){
		if(error){
			callback( {error:"Cannot return the profile list"});
		}else{
			callback(profiles);
		}
	});
};

exports.delete = function(id, callback){

	db.Profile.findById(id, function(error, profile){
		if(error){
			callback({error: "Cannot find the especified profile"});
		}else{
			
			if(!profile){
				callback({error:"Cannot find this profile"})
			}else{
				profile.remove(function(error){
					if(error){
						callback({error: 'Cannot remove this profile'});
					}else{
						callback({response: 'Profile removed'});
					}
				});
			}
			
		}
	});

};

exports.profile = function(id, callback){

	db.Profile.findById(id, function(error, profile){
		if(error || !profile){
			callback( {error:"Cannot find the especified profile"});
		}else{
			callback(profile);
		}
	});

};

exports.save = function(title, callback){

	new db.Profile({
		'title': title,
	}).save(function(error, profile){
		if(error){
			callback( {error:"Cannot save the profile"} );
		}else{
			callback(profile);
		}
	});

};

exports.update = function(id, title, callback){

	db.Profile.findById(id, function(error, profile){
		if(error || !profile){
			callback({error:"Cannot find the especified profile"});
		}else{

			if(title){
				profile.title = title;
			}

			profile.save(function(error, profile){
				if(error){
					callback({error:"Cannot save the profile"});
				}else{
					callback(profile);
				}
			});

		}
	});

};