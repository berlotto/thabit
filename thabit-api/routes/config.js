var express = require('express');
var router = express.Router();
var configController = require('../controllers/configController.js');
var validator = require('validator');

router.get('/', function(req, res){

	configController.get(function(resp){
		res.json(resp);
	});

});

router.post('/', function(req, res){

	configController.post(function(resp){
		res.json(resp);
	});

});

module.exports = router;