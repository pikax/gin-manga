'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MangaSchema = new Schema({
	Name :String,
	Illustrated :String,
	Author :String,
	DateEnd :Date,
	DateRealeased :Date,
	Tipo : String,
	Names : [String],
	Genrers : [String],
	Chapters : [{
		Number : Number,
		Sites : [{
			Site : String,
			Name : String,
			Images : [{
				Number: String,
				Url :String
			}]
		}]
	}]
});

module.exports = mongoose.model('Manga', MangaSchema);