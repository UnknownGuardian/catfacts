const transporter = require('nodemailer').createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true, // use SSL
	auth: {
		user: process.env.GMAIL_USER,
		pass: process.env.GMAIL_PASSWORD
	}
});

//GMAIL_PASSWORD=lna
//GMAIL_USER=noreplo@gmail.com

const emailer = {

  send:function (fromName, toEmail, subject, body) {
    var p = Promise.defer();
    transporter.sendMail({
        from: `"${fromName}" <noreply@mydomain>`,
        to: toEmail,
        subject: subject,
        text: body
      }, function(error, info) {
        if(error) {
          return console.error(error);
        }
        console.log('Email sent', info);
        p.resolve(info);
      });
      return yield p.promise;
  }),

};



module.exports = emailer;
