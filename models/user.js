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


UserSchema.methods.getTextEmailAddress = function() {
	var phone = this.phone;
	//i.e. 1-xxx-xxx-xxxx
	if(phone.startsWith("1") && phone.length == 10)
		phone = phone.substr(1);
	switch(this.carrier) {
		case "att": return phone + "@txt.att.net";
		case "verizon": return phone + "@vtext.com";
		case "sprint": return phone + "@messaging.sprintpcs.com";
		case "virgin_mobile": return phone + "@vmobl.com";
		case "metro_pcs": return phone + "@mymetropcs.com";
		case "republic_wireless": return phone + "@text.republicwireless.com";
	}
	return "";
}



var User = mongoose.model('User', UserSchema);

module.exports = User;