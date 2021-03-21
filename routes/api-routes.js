// Requiring our models and passport as we've configured it
const { promises } = require('fs');
const db = require("../models");

module.exports = function(app) {

  //create new message
  app.post("/api/messages", (req, res) => {
    db.messages.create({
      message_body: req.body.message_body,
      category_id: req.body.category_id,
      font_id: req.body.font_id,
      colour_id: req.body.colour_id
    }).then((result) => {
      res.status(200).end();
    });
  });

};
