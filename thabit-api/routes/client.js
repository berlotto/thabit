var express = require('express');
var router = express.Router();
var clientController = require('../controllers/clientController.js');
var validator = require('validator');

/* GET users listing. */
router.get('/', function(req, res) {

	/*
	Identify the clients on the execution
	return un atualized token
	*/

	var id = validator.trim(validator.escape(req.param('clientip')));
	var idt = validator.trim(validator.escape(req.param('clientidentifier')));

	// console.log("Calling identifyclient",id, idt);

    clientController.identifyclient(id, idt, function(resp){
    	res.json(resp);
    });
});

router.get('/config', function(req, res){



});

module.exports = router;
