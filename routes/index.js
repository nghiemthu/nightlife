var express = require("express");
var router = express.Router();

var passportTwitter = require("../auth/twitter");
var Event           = require("../models/event");
var User            = require("../models/user");
var middleware      = require("../middleware");

router.get('/login', function(req, res){
    res.redirect('/');
});

router.get('/auth/twitter', passportTwitter.authenticate('twitter'));

router.get('/auth/twitter/callback',
  passportTwitter.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication
    res.redirect('/');
  });
  
// logout route
router.get("/logout", function(req, res){
   req.logout();
   res.redirect("/");
});

router.get('/api/user', function(req, res){
  res.json(req.user || null);
});

router.get('/api/users', function(req, res){
  User.find({})
    .exec(function(err, users){
    if (err)
      console.log(err);
    else {
      res.json(users); 
    }
  });
});
  
router.get('/api/events', function(req, res){
  Event.find({})
    .exec(function(err, events){
    if (err)
      console.log(err);
    else {
      res.json(events); 
    }
  });
});

router.get('/api/events/:id', function(req, res){
  Event.findOne({name: req.params.id})
    .exec(function(err, events){
    if (err)
      console.log(err);
    else {
      res.json(events); 
    }
  });
});

router.post('/api/events', middleware.isLoggedIn, function(req, res){
    
  Event.findOneAndUpdate({name: req.body.name}, 
  {}, 
  { upsert: true, 'new': true },
  function(err, event){
    if (err) console.log(err);
    else {
      // Update the poll
      if (!req.body.name) {res.json({err: "Name is empty"}); return }
  
      event.name        = req.body.name;
      if (event.members.indexOf(req.user._id) <= -1)
        event.members.push(req.user._id);
      event.save();
  
      res.json(event);  
    }
  });
});

router.post('/api/events/remove', middleware.isLoggedIn, function(req, res){
    
  Event.findOneAndUpdate({name: req.body.name}, 
  {}, 
  { upsert: true, 'new': true },
  function(err, event){
    if (err) console.log(err);
    else {
      // Update the poll
      if (!req.body.name) {res.json({err: "Name is empty"}); return }
  
      event.name    = req.body.name;
      event.members = event.members.filter(mem => String(mem) !== String(req.user._id));
      event.save();
  
      res.json(event);  
    }
  });
});

module.exports = router;