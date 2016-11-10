var express = require('express');
var router = express.Router();
const messager = require('../models/emailer');

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
	messager.sendMessage(req.body.message);
	res.send('OK');
});

module.exports = router;
