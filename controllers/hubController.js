var mongoose = require('mongoose'),
  hub = mongoose.model('Hub');

exports.list_all_hub = function(req, res) {
  hub.find({}, function(err, hub) {
    if (err)
      res.send(err);
    res.json(hub);
  });
};




exports.create_a_hub = function(req, res) {
  var new_hub = new hub(req.body);
  new_hub.save(function(err, hub) {
    if (err)
      res.send(err);
    res.json(hub);
  });
};


exports.read_a_hub = function(req, res) {
  hub.findById(req.params.hubId, function(err, hub) {
    if (err)
      res.send(err);
    res.json(hub);
  });
};


exports.update_a_hub = function(req, res) {
  hub.findOneAndUpdate({_id: req.params.hubId}, req.body, {new: true}, function(err, hub) {
    if (err)
      res.send(err);
    res.json(hub);
  });
};


exports.delete_a_hub = function(req, res) {

  hub.remove({
    _id: req.params.hubId
  }, function(err, hub) {
    if (err)
      res.send(err);
    res.json({ message: 'hub successfully deleted' });
  });
};