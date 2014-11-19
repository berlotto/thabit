var assert = require('assert'),
    sould  = require('should'),
    request = require('supertest'),
    util = require('util'),
    app = require('../api.js');


describe('Client', function(){
	
	var url = 'http://localhost:5000';
	
	describe('Validation', function(){
		
		it('sould return information missing, passing nothing', function(done){

			request(url)
				.get('/client')
				.expect(200)
				.expect('Content-Type', /json/)
				.end(function(err, res){
					
					if(err){
						throw(err);
					}

					res.body.should.have.property('error');
					res.body.error.should.equal('Some information is missing.');
					done();
				});

		});

		it('sould return information missing, passing only ip', function(done){

			var body = {
				'clientip': '127.0.0.1'
			}
			request(url)
				.get('/client')
				.send(body)
				.expect(200)
				.expect('Content-Type', /json/)
				.end(function(err, res){
					
					if(err){
						throw(err);
					}

					res.body.should.have.property('error');
					res.body.error.should.equal('Some information is missing.');
					done();
				});

		});

		it('sould return information missing, passing only identifier', function(done){

			var body = {
				'clientidentifier': 'tester'
			}
			request(url)
				.get('/client')
				.send(body)
				.expect(200)
				.expect('Content-Type', /json/)
				.end(function(err, res){
					
					if(err){
						throw(err);
					}

					res.body.should.have.property('error');
					res.body.error.should.equal('Some information is missing.');
					done();
				});

		});

		it('sould not found the client', function(done){

			var body = {
				'clientip': "127.0.0.2", 
				'clientidentifier': 'teste2'
			}
			request(url)
				.get('/client')
				.send(body)
				.expect(200)
				.expect('Content-Type', /json/)
				.end(function(err, res){
					
					if(err){
						throw(err);
					}

					res.body.should.have.property('error');
					res.body.error.should.equal('Cannot find this Client');
					done();
				});

		});

		it('sould found the client', function(done){

			var body = {
				'clientip': "127.0.0.1", 
				'clientidentifier': 'tester'
			}
			request(url)
				.get('/client')
				.send(body)
				.expect(200)
				.expect('Content-Type', /json/)
				.end(function(err, res){
					
					if(err){
						throw(err);
					}

					res.body.should.have.property('_id');
					// res.body.error.should.equal('Cannot find this Client');
					done();
				});

		});

	});

});

