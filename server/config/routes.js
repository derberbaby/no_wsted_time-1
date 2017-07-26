var users = require('./../controllers/users.js');
var create = require('./../controllers/create.js');

module.exports = (app) => {
  app.post('/api/login', users.login);

  app.post('/api/register', users.register);

  app.get('/api/user', users.check_session_user);

  app.get('/api/logout', users.logout);

  app.post('/api/create', create.new_thing);
}
