var users = require('./../controllers/users.js');
var creates = require('./../controllers/creates.js');
var journals = require('./../controllers/journals.js');

module.exports = (app) => {
  app.post('/api/login', users.login);

  app.post('/api/register', users.register);

  app.get('/api/user', users.check_session_user);

  app.get('/api/logout', users.logout);

  app.post('/api/creates', creates.new_thing);

  app.post('/api/add_journal_entry', journals.newEntry);
}
