var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var peopleSchema = new Schema({
    hubId: Number,
    data: [String],
  });

  module.exports = mongoose.model('People', peopleSchema);