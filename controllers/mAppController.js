const User = require('../models/user');

module.exports = function(app)
{
  // get a list of users from db
  app.get('/user', function(req, res, next){
    User.find({}, function(err, data){
      res.send(data);
    })
  });

  // insert a user from db
  app.post('/user', function(req, res, next){
    User.create(req.body).then(function(user){
          res.send(user);
      }).catch(next);
  });

  // update user from db
  app.put('/user/:id', function(req, res, next){
    res.send({type: 'PUT'});
  });

  // delete user from db
  app.delete('/user/:id', function(req, res, next){
      es.send({type: 'DELETE'});
  });
};
