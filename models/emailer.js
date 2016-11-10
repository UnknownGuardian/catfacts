const transporter = require('nodemailer').createTransport({
	host: 'smtp.mailgun.org',
	port: 465,
	secure: true, // use SSL
	auth: {
		user: process.env.GMAIL_USER,
		pass: process.env.GMAIL_PASSWORD
	}
});
var User = require('./../models/user');


//GMAIL_PASSWORD=lna
//GMAIL_USER=noreplo@gmail.com

const emailer = {

  _send:function (fromName, toEmail, subject, body) {
    transporter.sendMail({
        from: `"${fromName}" <` + process.env.GMAIL_USER + `>`,
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
        this._send("Cat Facts", users[i].getTextEmailAddress(), "Cat Facts", message);
      }
    });
    
  }

};



module.exports = emailer;
