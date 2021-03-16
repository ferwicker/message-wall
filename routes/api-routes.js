// Requiring our models
const db = require('../models/messages');

// Routes
module.exports = (app) => {
  // GET route for getting all of the todos
  app.get('/api/messages', (req, res) => {
    // findAll returns all entries for a table when used with no options
    db.messages.findAll({}).then((dbMessages) => res.json(dbMessages));

  });

  // POST route for saving a new todo
  app.post('/api/messages', (req, res) => {
    db.Messages.create({
      message: req.body.message_desc,
      message_cat: req.body.message_cat_id,
      font: req.body.font_id,
      colour: req.body.colour_id,
      likes: req.body.likes
    }).then((dbMessages) => res.json(dbMessages));
  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put('/api/todos', (req, res) => {
    db.Todo.update(
      {
        likes: req.body.likes,
      },
      {
        where: {
          id: req.body.message_id,
        },
      }
    ).then((dbMessages) => res.json(dbMessages));
  });
};


// (select message_desc, cat_desc, col_label, font_label
//   from messages, colour, fonts, message_cat
//   where font_id = fonts.id
//   and colour_id = colour.id
//   and message_cat_id = message_cat.id)