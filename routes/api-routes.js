// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/config.json");

module.exports = function(app) {
  //get messages
  app.get("/api/wall", (req, res) => {

  });

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

  //   // PUT route for updating todos. We can get the updated todo data from req.body
  //   app.put('/api/todos', (req, res) => {
  //     db.Todo.update(
  //       {
  //         text: req.body.text,
  //         complete: req.body.complete,
  //       },
  //       {
  //         where: {
  //           id: req.body.id,
  //         },
  //       }
  //     ).then((dbTodo) => res.json(dbTodo));
  //   });
};
