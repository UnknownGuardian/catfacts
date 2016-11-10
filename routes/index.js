var express = require('express');
var router = express.Router();
const emailer = require('../models/emailer');
var Message = require('./../models/message');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/secret', function(req, res, next) {
  res.render('secret', { title: 'Express' });
});


/* GET home page. */
router.post('/messages', function(req, res, next) {
	var mess = req.body.message;
	if(!mess || mess == "%") {
		Message.random(function(err, quote) { 
			if(err) throw err;
			emailer.sendMessage(quote.message);
		});
	}
	else {
		emailer.sendMessage(req.body.message);
	}
	res.send('OK');
});

module.exports = router;
