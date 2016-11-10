const transporter = require('nodemailer').createTransport({
	host: 'smtp.mailgun.org',
	port: 465,
	secure: true, // use SSL
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASSWORD
	}
});
var User = require('./../models/user');


//GMAIL_PASSWORD=lna
//GMAIL_USER=noreplo@gmail.com

var self = module.exports =  {

  _send:function (fromName, toEmail, subject, body) {
    transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: toEmail,
        subject: subject,
        text: body
      }, function(error, info) {
        if(error) {
          return console.error(error);
        }
        console.log('Email sent', info);
      });
  },


  sendMessage:function(message) {
    User.find({}, function(err, users) {
      if (err) throw err;
      for(var i = 0; i < users.length;i++) {
        //console.log(users[i].getTextEmailAddress());
        var destination = users[i].getTextEmailAddress();
        if(destination != "" && destination && destination.length > 0)
          self._send("Cat Facts", destination, "Cat Facts", message);
      }
    })
    
  }

};


