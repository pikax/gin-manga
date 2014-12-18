'use strict';

var _ = require('lodash');
var Manga = require('./manga.model');

// Get list of mangas
exports.index = function(req, res) {
  Manga.find(function (err, mangas) {
    if(err) { return handleError(res, err); }
    return res.json(200, mangas);
  });
};

// Get a single manga
exports.show = function(req, res) {
  Manga.findById(req.params.id, function (err, manga) {
    if(err) { return handleError(res, err); }
    if(!manga) { return res.send(404); }
    return res.json(manga);
  });
};

// Creates a new manga in the DB.
exports.create = function(req, res) {
  Manga.create(req.body, function(err, manga) {
    if(err) { return handleError(res, err); }
    return res.json(201, manga);
  });
};

// Updates an existing manga in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Manga.findById(req.params.id, function (err, manga) {
    if (err) { return handleError(res, err); }
    if(!manga) { return res.send(404); }
    var updated = _.merge(manga, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, manga);
    });
  });
};

// Deletes a manga from the DB.
exports.destroy = function(req, res) {
  Manga.findById(req.params.id, function (err, manga) {
    if(err) { return handleError(res, err); }
    if(!manga) { return res.send(404); }
    manga.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

exports.search = function(req,res) {
  var expression = RegExp(req.params.name,'i');
  //  Manga.find({Name: expression}
  //       ,function (err,mangas) {
  //   if(err) { return handleError(res, err); }
  //   res.json(201,mangas);
  // });

  // Manga.find({$or: [{Name: expression},{Names : {$in : [expression]}}]}
  Manga.find({$or: [{Name: expression},{Names : expression}]}
      ,{Name:1, _id:0}
        ,function (err,mangas) {
    if(err) { return handleError(res, err); }
    res.json(201,mangas);
  });
}

function handleError(res, err) {
  return res.send(500, err);
}