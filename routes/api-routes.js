// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/connection");

module.exports = function(app) {

  app.post("/api/search", (req, res) => {
    db.User.create({
      message: req.body.message_desc,
      message_category: req.body.message_category_id,
      likes: req.body.likes,
    };

  // Route for logging user out
  app.get("/api/add", (req, res) => {


  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
