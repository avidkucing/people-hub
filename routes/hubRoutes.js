module.exports = function(app) {
    var hub = require('../controllers/hubController');
  
    // hub Routes
    app.route('/hub')
      .get(hub.list_all_hub)
      .post(hub.create_a_hub)
      .delete(hub.delete_all_hub);
  
  
    app.route('/hub/:hubId')
      .get(hub.read_a_hub)
      .put(hub.update_a_hub)
      .delete(hub.delete_a_hub);
  };