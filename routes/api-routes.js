// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function(app) {
  //get messages
  app.get("api/wall/:category_id", (req, res) => {
    const wallId = req.params.category_id;
    console.log(req.params);
    console.log(`api id value: ${wallId}`);
    const messages = db.messages.findAll({
      raw : true,
      where: {
        category_id: wallId
      }});
    const categories = db.categories.findAll({raw : true});
    const fonts = db.fonts.findAll({raw : true});
    const colours = db.colours.findAll({raw : true});
    Promise.all([categories, fonts, colours, messages]).then((data) => {
      const renderObj = {
        categories: data[0],
        fonts: data[1],
        colours: data[2],
        messages: data[3]
      };
      res.render('index', renderObj);
    }).catch(err => console.log(err));
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
