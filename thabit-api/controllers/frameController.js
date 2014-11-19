var db = require('../dbconfig.js');

exports.list = function(callback){
	db.Frame.find({}, function(error, frames){
		if(error){
			callback( {error:"Cannot return the Frame list"});
		}else{
			callback(frames);
		}
	});
};

exports.delete = function(id, callback){

	db.Frame.findById(id, function(error, frame){
		if(error){
			callback({error: "Cannot find the especified frame"});
		}else{
			
			if(!frame){
				callback({error:"Cannot find this frame"})
			}else{
				frame.remove(function(error){
					if(error){
						callback({error: 'Cannot remove this frame'});
					}else{
						callback({response: 'Frame removed'});
					}
				});
			}
			
		}
	});

};

exports.frame = function(id, callback){

	db.Frame.findById(id, function(error, frame){
		if(error || !frame){
			callback( {error:"Cannot find the especified frame"});
		}else{
			callback(frame);
		}
	});

};

exports.save = function(title, callback){

	new db.Frame({
		'title': title,
	}).save(function(error, frame){
		if(error){
			callback( {error:"Cannot save the Frame"} );
		}else{
			callback(frame);
		}
	});

};

exports.update = function(id, title, callback){

	db.Frame.findById(id, function(error, frame){
		if(error || !frame){
			callback({error:"Cannot find the especified frame"});
		}else{

			if(title){
				frame.title = title;
			}

			frame.save(function(error, frame){
				if(error){
					callback({error:"Cannot save the frame"});
				}else{
					callback(frame);
				}
			});

		}
	});

};