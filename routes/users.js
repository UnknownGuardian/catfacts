var express = require('express');
var router = express.Router();
var User = require('./../models/user');

router.get('/', function(req, res, next) {
	User.find({}, function(err, users) {
	  if (err) throw err;
	  res.json(users);
	});
});

/* GET get user */
router.get('/:id', function(req, res, next) {
	User.find({_id:req.params.id}, function(err, users) {
	  if (err) throw err;
	  res.json(users);
	});
  
});

/* POST new user */
router.post('/', function(req, res, next) {
	console.log("We got a subscriber");
	var u = new User({
						phone:req.body.phone,
				 		carrier:req.body.carrier
				 	});
	u.save( function(err) {
		if(err) throw err;
		console.log("We've saved the user to database");
	})
	res.send('OK');
});

/* PUT update user * /
router.put('/:id', function(req, res, next) {
 
});*/

/* DELETE user */
router.post('/:id', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
