'use strict';

var http = require('http');
var assert = require('should');

var gincloud = require('../');


describe('server',function()
{
	before(function()
	{
		gincloud.listen(8000);
	});

	after(function()
	{
		gincloud.close();
	});

	it('should return 200', function (done) {
    http.get('http://localhost:8000', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
    });

    it('should connect to mongoDB',function(done)
    {
    	var db = gincloud.DB('mongodb://dev:dev@ds056727.mongolab.com:56727/gincloudteste');
    	db.on('error',function(error)
    	{
    		assert.equal('',error);
    	});
    	db.once('open',function(callback)
    	{
    		done();
    	});
    });
});
