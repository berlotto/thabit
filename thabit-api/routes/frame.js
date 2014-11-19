var express = require('express');
var router = express.Router();
var frameController = require('../controllers/frameController.js');
var validator = require('validator');

router.get('/', function(req, res){

	frameController.list(function(resp){
		res.json(resp);
	});

});

router.get('/:id', function(req, res){

	var id = validator.trim(validator.escape(req.param('id')));

	frameController.frame(id, function(resp){
		res.json(resp);
	});

});

router.delete('/:id', function(req, res){

	var id = validator.trim(validator.escape(req.param('id')));

	frameController.delete(id, function(resp){
		res.json(resp);
	});

});

router.post('/', function(req, res){

	var title = validator.trim(validator.escape(req.param('title')));

	frameController.save(title, function(resp){
		res.json(resp)
	});

});

router.put('/:id', function(req, res){

	var id = validator.trim(validator.escape(req.param('id')));
	var title = validator.trim(validator.escape(req.param('title')));

	frameController.update(id, title, function(resp){
		res.json(resp)
	});

});

module.exports = router;
