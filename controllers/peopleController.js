var mongoose = require('mongoose'),
  people = mongoose.model('People');

exports.list_all_people = function(req, res) {
  people.find({}, function(err, people) {
    if (err)
      res.send(err);
    res.json(people);
  });
};

exports.create_a_people = function(req, res) {
  var new_people = new people(req.body);
  new_people.save(function(err, people) {
    if (err)
      res.send(err);
    res.json(people);
  });
};

exports.read_a_people = function(req, res) {
  people.findById(req.params.peopleId, function(err, people) {
    if (err)
      res.send(err);
    res.json(people);
  });
};

exports.update_a_people = function(req, res) {
  people.findOneAndUpdate({_id: req.params.peopleId}, req.body, {new: true}, function(err, people) {
    if (err)
      res.send(err);
    res.json(people);
  });
};

exports.delete_a_people = function(req, res) {

  people.remove({
    _id: req.params.peopleId
  }, function(err, people) {
    if (err)
      res.send(err);
    res.json({ message: 'people successfully deleted' });
  });
};

exports.delete_all_people = function(req, res) {

    people.remove({}, function(err, people) {
      if (err)
        res.send(err);
      res.json({ message: 'all people successfully deleted' });
    });
  };