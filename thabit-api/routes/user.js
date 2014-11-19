var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController.js');
var validator = require('validator');

router.get('/', function(req, res){

	userController.list(function(resp){
		res.json(resp);
	});

});

router.get('/:id', function(req, res){

	var id = validator.trim(validator.escape(req.param('id')));

	userController.user(id, function(resp){
		res.json(resp);
	});

});

router.delete('/:id', function(req, res){

	var id = validator.trim(validator.escape(req.param('id')));

	userController.delete(id, function(resp){
		res.json(resp);
	});

});

router.post('/', function(req, res){

	var title = validator.trim(validator.escape(req.param('title')));

	userController.save(title, function(resp){
		res.json(resp)
	});

});

router.put('/:id', function(req, res){

	var id = validator.trim(validator.escape(req.param('id')));
	var title = validator.trim(validator.escape(req.param('title')));

	userController.update(id, title, function(resp){
		res.json(resp)
	});

});

module.exports = router;
