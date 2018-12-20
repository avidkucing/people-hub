var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var hubSchema = new Schema({
    id:  Number,
    people: [Number],
    blocks: [String],
  });

  module.exports = mongoose.model('Hub', hubSchema);