var mongoose = require('mongoose');
var uuid = require('node-uuid');

var Schema = mongoose.Schema;

var MessageSchema = new Schema({
	_id: { 
		type: String,
		default: uuid.v1
	},
	message:String
});

MessageSchema.statics.random = function(callback) {
  this.count(function(err, count) {
    if (err) {
      return callback(err);
    }
    var rand = Math.floor(Math.random() * count);
    this.findOne().skip(rand).exec(callback);
  }.bind(this));
};


var Message = mongoose.model('Message', MessageSchema);

module.exports = Message;