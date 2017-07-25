var users = require('./../controllers/users.js');

module.exports = (app) => {
  app.get('/api/login', users.login);

  app.post('/api/register', users.register);

  app.get('/api/user', users.check_session_user);

  app.get('api/logout', users.logout);

}