var Event = require("../models/event");

module.exports = {
  isLoggedIn: function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    
    return res.json({ err: 'You have to log in to continue!'});
  }
};