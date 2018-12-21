module.exports = function(app) {
    var people = require('../controllers/peopleController');
  
    // people Routes
    app.route('/hub/:hubId/people')
      .get(people.list_all_people)
      .post(people.create_a_people)
      .delete(people.delete_all_people);
  
  
    app.route('/hub/:hubId/people/:peopleId')
      .get(people.read_a_people)
      .put(people.update_a_people)
      .delete(people.delete_a_people);
  };