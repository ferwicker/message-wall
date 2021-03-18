// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/config.json");

module.exports = function (app) {

  //get messages
  app.get("/api/wall", (req, res) => {
    db.messages.findAll({}).then((dbmessages) => res.json(dbmessages));
  });

  //get fonts
  app.get("/api/wall", (req, res) => {
    db.fonts.findAll({}).then((dbfonts) => res.json(dbfonts));
  });

  //get colours
  app.get("/api/wall", (req, res) => {
    db.colour.findAll({}).then((dbcolour) => res.json(dbcolour));
  });

  //get categories
  app.get("/api/wall", (req, res) => {
    db.category.findAll({}).then((dbcategory) => res.json(dbcategory));
    console.log(category);
  });

//   //create new message
//   app.post("/api/add", (req, res) => {
//     db.messages.create({
//       message: req.body.message_desc,
//       likes: req.body.likes,
//       message_category: req.body.message_category_id {
//         where:{ cat_desc = category.id,}
//       }),
//     });
//     console.log(res);


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
