var users = require('./../controllers/users.js');
var creates = require('./../controllers/creates.js'); 
var journals = require('./../controllers/journals.js');

module.exports = (app) => {
  app.post('/api/login', users.login);

  app.post('/api/register', users.register);

  app.get('/api/user', users.check_session_user);

  app.get('/api/logout', users.logout);

  app.post('/api/create', creates.new_thing);

  app.post('/api/add_journal_entry', journals.newEntry);

  app.post('/api/find_journal_entry', journals.findEntry);

  app.post('/api/edit_journal_entry', journals.editEntry);

  app.get('/api/tasks', users.getTasks);
  
  app.post('/api/tasks/addTasks', users.addTasks);
}
