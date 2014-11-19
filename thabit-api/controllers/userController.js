var db = require('../dbconfig.js');

exports.list = function(callback){
	db.User.find({}, function(error, users){
		if(error){
			callback( {error:"Cannot return the user list"});
		}else{
			callback(users);
		}
	});
};

exports.delete = function(id, callback){

	db.User.findById(id, function(error, user){
		if(error){
			callback({error: "Cannot find the especified user"});
		}else{
			
			if(!user){
				callback({error:"Cannot find this user"})
			}else{
				user.remove(function(error){
					if(error){
						callback({error: 'Cannot remove this user'});
					}else{
						callback({response: 'User removed'});
					}
				});
			}
			
		}
	});

};

exports.user = function(id, callback){

	db.User.findById(id, function(error, user){
		if(error || !user){
			callback( {error:"Cannot find the especified user"});
		}else{
			callback(user);
		}
	});

};

exports.save = function(title, callback){

	new db.User({
		'title': title,
	}).save(function(error, user){
		if(error){
			callback( {error:"Cannot save the user"} );
		}else{
			callback(user);
		}
	});

};

exports.update = function(id, title, callback){

	db.User.findById(id, function(error, user){
		if(error || !user){
			callback({error:"Cannot find the especified user"});
		}else{

			if(title){
				user.title = title;
			}

			user.save(function(error, user){
				if(error){
					callback({error:"Cannot save the user"});
				}else{
					callback(user);
				}
			});

		}
	});

};