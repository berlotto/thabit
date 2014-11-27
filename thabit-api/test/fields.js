var assert = require('assert'),
    sould  = require('should'),
    request = require('supertest'),
    util = require('util'),
    app = require('../api.js');

describe("Field", function(){

	var url = 'http://localhost:5000';

	describe("Consulting", function(){

		it("Sould return all the fields", function(	done ){
			request(url)
				.get('/field')
				.expect(200)
				.expect('Content-Type',/json/)
				.end(function(err, res){
					if(err){
						throw(err);
					}

					res.body.should.have.property('error');
					res.body.error.should.equal('Some information is missing.');
					done();

				});
		});

	});

});