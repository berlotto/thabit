var express = require('express');
var router = express.Router();
var fieldController = require('../controllers/fieldController.js');
var validator = require('validator');

router.get('/', function(req, res){

	fieldController.list(function(resp){
		res.json(resp);
	});

});

router.get('/:id', function(req, res){

	var id = validator.trim(validator.escape(req.param('id')));

	fieldController.field(id, function(resp){
		res.json(resp);
	});

});

router.delete('/:id', function(req, res){

	var id = validator.trim(validator.escape(req.param('id')));

	fieldController.delete(id, function(resp){
		res.json(resp);
	});

});

router.post('/', function(req, res){

	var title = validator.trim(validator.escape(req.param('title')));

	fieldController.save(title, function(resp){
		res.json(resp)
	});

});

router.put('/:id', function(req, res){

	var id = validator.trim(validator.escape(req.param('id')));
	var title = validator.trim(validator.escape(req.param('title')));

	fieldController.update(id, title, function(resp){
		res.json(resp)
	});

});

module.exports = router;
