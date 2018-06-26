const User = require('../models/user');

module.exports = function(app)
{
  app.get( '/admin/user', function(req, res) {
    User.find({}, function(err, data){
      if(err) throw err;
      res.render('admin/user', {users: data});
    });
  });

  app.get( '/admin/user/:id', function(req, res) {
    User.find({_id: req.params.id}, function(err, data){
      if(err) throw err;
      res.render('admin/user-profile', {user: data});
    });
  });

  app.post( '/admin/user', function(req, res) {

  });

  app.delete( '/admin/user/:id', function(req, res) {

  });
};
