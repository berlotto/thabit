
var db_string= 'mongodb://127.0.0.1/thabit'
  , mongoose = require('mongoose').connect(db_string)
  , db = mongoose.connection;

/*
 Plugins used for Mongoose:
 - https://www.npmjs.org/package/mongoose-delete
 - https://www.npmjs.org/package/mongoose-updated_at
 */

db.on('error', console.error.bind(console, 'Erro ao conectar no banco'));
db.once('open', function() {
	
	var soft_delete = require('mongoose-delete');
	var updatedTimestamp = require('mongoose-updated_at');

	/* === FRAME ===*/
	
	var frameSchema = mongoose.Schema({
		title: String,
		owner: mongoose.Schema.Types.ObjectId,
		createdAt: {type: Date, default: Date.now},
		updatedAt: {type: Date, default: Date.now},
		fields:[{
			field: mongoose.Schema.Types.ObjectId,
			order: Number,
			width: Number,
			mandatory: Boolean,
		}]
	});
	frameSchema.plugin(soft_delete, { deletedAt : true, deletedBy : true });
	frameSchema.plugin(updatedTimestamp);
	exports.Frame = mongoose.model('Frame', frameSchema);

	/* === FIELD ===*/

	var fieldSchema = mongoose.Schema({
		createdAt: {type: Date, default: Date.now},
		updatedAt: {type: Date, default: Date.now},
		label: String,
		type: String,
		size: Number,
		frame_id: mongoose.Schema.Types.ObjectId,
		reg_exp_validation: String
	});
	fieldSchema.plugin(soft_delete, { deletedAt : true, deletedBy : true });
	fieldSchema.plugin(updatedTimestamp);
	exports.Field = mongoose.model('Field', fieldSchema);

	/* === DATA ===*/

	var dataSchema = mongoose.Schema({
		frame: {type: mongoose.Schema.Types.ObjectId, ref:'Frame'},
		line_number: Number,
		createdAt: {type: Date, default: Date.now},
		updatedAt: {type: Date, default: Date.now},
		data:[{
			field_id: mongoose.Schema.Types.ObjectId,
			data: mongoose.Schema.Types.Mixed
		}]

	});
	dataSchema.plugin(soft_delete, { deletedAt : true, deletedBy : true });
	dataSchema.plugin(updatedTimestamp);
	exports.Data = mongoose.model('Data', dataSchema);

	/* === PROFILE ===*/

	var profileSchema = mongoose.Schema({
		name: String,
		createdAt: {type: Date, default: Date.now},
		updatedAt: {type: Date, default: Date.now},
		system_created: Boolean,
		permissions: [{
			data_create: Boolean,
			data_update: Boolean,
			data_delete: Boolean,
			frame_configure: Boolean,
			frame_id: mongoose.Schema.Types.ObjectId,
		}]
	});
	profileSchema.plugin(soft_delete, { deletedAt : true, deletedBy : true });
	profileSchema.plugin(updatedTimestamp);
	exports.Profile = mongoose.model('Profile', profileSchema);

	/* === USER ===*/

	var userSchema = mongoose.Schema({
		username: String,
		fullname: String,
		email: String,
		password: String,
		createdAt: { type: Date, default: Date.now },
		updatedAt: { type: Date, default: Date.now },
		date_updated: Date,
		disabled: { type: Boolean, default: false },
		profile: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Profile'
		}
	});
	userSchema.plugin(soft_delete, { deletedAt : true, deletedBy : true });
	userSchema.plugin(updatedTimestamp);
	exports.User = mongoose.model('User', userSchema);

	/* === SYSTEM CONFIGURATION ===*/

	var configSchema = mongoose.Schema({
		createdAt: { type: Date, default: Date.now },
		updatedAt: { type: Date, default: Date.now },
		key: String,
		data: mongoose.Schema.Types.Mixed
	});
	configSchema.plugin(soft_delete, { deletedAt : true, deletedBy : true });
	configSchema.plugin(updatedTimestamp);
	exports.Config = mongoose.model('Config', configSchema);

});