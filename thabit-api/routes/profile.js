var express = require('express');
var router = express.Router();
var profileController = require('../controllers/profileController.js');
var validator = require('validator');

router.get('/', function(req, res){

	profileController.list(function(resp){
		res.json(resp);
	});

});

router.get('/:id', function(req, res){

	var id = validator.trim(validator.escape(req.param('id')));

	profileController.profile(id, function(resp){
		res.json(resp);
	});

});

router.delete('/:id', function(req, res){

	var id = validator.trim(validator.escape(req.param('id')));

	profileController.delete(id, function(resp){
		res.json(resp);
	});

});

router.post('/', function(req, res){

	var title = validator.trim(validator.escape(req.param('title')));

	profileController.save(title, function(resp){
		res.json(resp)
	});

});

router.put('/:id', function(req, res){

	var id = validator.trim(validator.escape(req.param('id')));
	var title = validator.trim(validator.escape(req.param('title')));

	profileController.update(id, title, function(resp){
		res.json(resp)
	});

});

module.exports = router;
