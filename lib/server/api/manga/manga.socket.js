/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Manga = require('./manga.model');

exports.register = function(socket) {
  Manga.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Manga.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('manga:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('manga:remove', doc);
}