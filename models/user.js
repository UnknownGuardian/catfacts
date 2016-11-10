var mongoose = require('mongoose');
var uuid = require('node-uuid');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
	_id: { 
		type: String,
		default: uuid.v1
	},
	phone: String,
	carrier: String,
	messages: []
});


var User = mongoose.model('User', UserSchema);

module.exports = User;