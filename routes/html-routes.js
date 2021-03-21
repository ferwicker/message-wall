// Dependencies
const { promises } = require('fs');
const path = require('path');
const db = require('../models');



// Routes
module.exports = (app) => {
  // trying something for wall selection
  app.get("/:category_id", (req, res) => {
    var wallId;
    if (req.params.category_id === undefined){
      wallId = 1;
    } else {
      wallId = req.params.category_id;
    }
    const categories = db.categories.findAll({raw : true});
    const fonts = db.fonts.findAll({raw : true});
    const colours = db.colours.findAll({raw : true});
    const messages = db.messages.findAll({
      raw : true,
      where: {
        category_id: wallId
      }});

    Promise.all([categories, fonts, colours, messages]).then((data) => {   
      const categories = data[0];
      const fonts = data[1];
      const colours = data[2];
      const messages = data[3];
        
        for (i=0; i<categories.length; i++){
          if(categories[i].id === parseInt(wallId)){
            categories[i].selected = true;
          }
        }

        // add colour style on messages
        for (i=0; i < messages.length; i++){
          let colourId = messages[i].colour_id;
          let colorStyle;
          for (y=0; y<colours.length; y++){
            if (colours[y].id === colourId){
              colorStyle = colours[y].colour_css
            }
          }
          messages[i].colorCss = colorStyle;
        }

        // add font style on messages
        for (i=0; i < messages.length; i++){
          let fontId = messages[i].font_id;
          let fontStyle;
          for (y=0; y<fonts.length; y++){
            if (fonts[y].id === fontId){
              fontStyle = fonts[y].font_css
            }
          }
          messages[i].fontCss = fontStyle;
        }

        const renderObj = {
          categories: categories,
          fonts: data[1],
          colours: data[2],
          messages: data[3],
          selectedWall: wallId
        };
      
    console.log(renderObj);
    res.render('index', renderObj);
      
    })
  });

 
  app.get("/", (req, res) => {
    const categories = db.categories.findAll({raw : true});
    const fonts = db.fonts.findAll({raw : true});
    const colours = db.colours.findAll({raw : true});
    const messages = db.messages.findAll({
      raw : true,
      where: {
        category_id: 1
      }});
    Promise.all([categories, fonts, colours, messages]).then((data) => {
        const categories = data[0];
        const fonts = data[1];
        const colours = data[2];
        const messages = data[3];

        for (i=0; i<categories.length; i++){
          if(categories[i].id === 1){
            categories[i].selected = true;
          }
        }

        // add colour style on messages
        for (i=0; i < messages.length; i++){
          let colourId = messages[i].colour_id;
          let colorStyle;
          for (y=0; y<colours.length; y++){
            if (colours[y].id === colourId){
              colorStyle = colours[y].colour_css
            }
          }
          messages[i].colorCss = colorStyle;
        }

        // add font style on messages
        for (i=0; i < messages.length; i++){
          let fontId = messages[i].font_id;
          let fontStyle;
          for (y=0; y<fonts.length; y++){
            if (fonts[y].id === fontId){
              fontStyle = fonts[y].font_css
            }
          }
          messages[i].fontCss = fontStyle;
        }

        const renderObj = {
          categories,
          fonts,
          colours,
          messages
        };
      
      //console.log(categoryObj);
      res.render('index', renderObj);
    })
  });

}; // end of export