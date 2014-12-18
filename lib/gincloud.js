/*
 * GinCloud
 * https://github.com/pikax/gincloud
 *
 * Copyright (c) 2014 Carlos Rodrigues
 * Licensed under the MIT license.
 */

'use strict';

var http = require('http');
var mongoose = require('mongoose');

var server = http.createServer(function(req,res)
{
	res.writeHead(200, { 'Content-Type': 'text/plain' });
  	res.end('Hello, world!\n');
});

exports.listen = function()
{
	server.listen.apply(server,arguments);
};

exports.close = function(callback)
{
	server.close(callback);
};

exports.DB = function(constring)
{
	mongoose.connect(constring);
	return mongoose.connection;
};

// module.exports = function() {
//   return 'awesome';
// };
