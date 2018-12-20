var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var hubSchema = new Schema({
    peopleId: [Number],
    blocks: [String],
  });

  module.exports = mongoose.model('Hub', hubSchema);