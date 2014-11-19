var db = require('../dbconfig.js');

exports.list = function(callback){
	db.Field.find({}, function(error, fields){
		if(error){
			callback( {error:"Cannot return the field list"});
		}else{
			callback(fields);
		}
	});
};

exports.delete = function(id, callback){

	db.Field.findById(id, function(error, field){
		if(error){
			callback({error: "Cannot find the especified field"});
		}else{
			
			if(!field){
				callback({error:"Cannot find this field"})
			}else{
				field.remove(function(error){
					if(error){
						callback({error: 'Cannot remove this field'});
					}else{
						callback({response: 'Field removed'});
					}
				});
			}
			
		}
	});

};

exports.field = function(id, callback){

	db.Field.findById(id, function(error, field){
		if(error || !field){
			callback( {error:"Cannot find the especified field"});
		}else{
			callback(field);
		}
	});

};

exports.save = function(title, callback){

	new db.Field({
		'title': title,
	}).save(function(error, field){
		if(error){
			callback( {error:"Cannot save the field"} );
		}else{
			callback(field);
		}
	});

};

exports.update = function(id, title, callback){

	db.Field.findById(id, function(error, field){
		if(error || !field){
			callback({error:"Cannot find the especified field"});
		}else{

			if(title){
				field.title = title;
			}

			field.save(function(error, field){
				if(error){
					callback({error:"Cannot save the field"});
				}else{
					callback(field);
				}
			});

		}
	});

};