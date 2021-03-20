// Dependencies
const { promises } = require('fs');
const path = require('path');
const db = require('../models');



// Routes
module.exports = (app) => {

  app.get("/", (req, res) => {
    const categories = db.categories.findAll({raw : true});
    const fonts = db.fonts.findAll({raw : true});
    const colours = db.colours.findAll({raw : true});
    const messages = db.messages.findAll({raw : true});
    Promise.all([categories, fonts, colours, messages]).then((data) => {   
        const categoryObj = {
          categories: data[0],
          fonts: data[1],
          colours: data[2],
          messages: data[3]
        };
      
      console.log(categoryObj);
      res.render('index', categoryObj);
    })
  });

  app.get("/add", (req, res) => {
    res.render('index', categories, fonts, colours, messages);
  });
};