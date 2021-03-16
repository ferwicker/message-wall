// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/config.json");

module.exports = function(app) {

  //get messages
app.get("/api/", (req,res) => {
  db.messages.findAll({}).then((dbmessages) => res.json(dbmessages));
});

  //get fonts
  app.get("/api/", (req,res) => {
    db.fonts.findAll({}).then((dbfonts) => res.json(dbfonts));
  });

  //get colours
  app.get("/api/", (req,res) => {
    db.colour.findAll({}).then((dbcolour) => res.json(dbcolour));
  });

  //get categories
  app.get("/api/", (req,res) => {
    db.categories.findAll({}).then((dbcategories) => res.json(dbcategories));
  });

  
  app.post("/api/search", (req, res) => {
    db.User.create({
      message: req.body.message_desc,
      message_category: req.body.message_category_id,
      likes: req.body.likes,
    };
    console.log(res)


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
