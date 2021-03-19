// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/config.json");

module.exports = function(app) {
  //get messages
  app.get("/api/wall", (req, res) => {
    db.messages.findAll({}).then(dbmessages => res.json(dbmessages));
    db.fonts.findAll({}).then(dbfonts => res.json(dbfonts));
    db.colour.findAll({}).then(dbcolour => res.json(dbcolour));
    db.category.findAll({}).then(dbcategory => res.json(dbcategory));
  });

  //create new message
  app.post("/api/add", (req, res) => {
    db.messages.create({
      message: req.body.message_desc,
      message_category: req.body.message_category_id,
      font_id: req.body.font_id,
      colour_id: req.body.colour_id
    }).then((dbmessages) => res.json(dbmessages));
  });


//     // PUT route for updating todos. We can get the updated todo data from req.body
//     app.put('/api/todos', (req, res) => {
//       db.Todo.update(
//         {
//           text: req.body.text,
//           complete: req.body.complete,
//         },
//         {
//           where: {
//             id: req.body.id,
//           },
//         }
//       ).then((dbTodo) => res.json(dbTodo));
//     });
// };
