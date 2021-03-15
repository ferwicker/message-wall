
// Sequelize (capital) references the standard library
const Sequelize = require('sequelize');
// sequelize (lowercase) references my connection to the DB.
const sequelize = require('../config/config.js');

// Creates a message model that matches up with DB
const Messages = sequelize.define('messages', {
  message_desc: {
    type: Sequelize.STRING
  },
  message_cat_id: {
    type: Sequelize.STRING
  },
  likes: {
    type: Sequelize.INTEGER
  },
},
{
  freezeTableName: true // Model tableName will be the same as the model name instead of being pluralized
});

const Message_Cat = sequelize.define('message_cat', {
  cat_desc:{
    type: Sequelize.STRING
  },
},
{
  freezeTableName: true // Model tableName will be the same as the model name instead of being pluralized
});

const Fonts = sequelize.define('fonts', {
  font_label: {
    type: Sequelize.STRING
  },
  css_col: {
    type: Sequelize.STRING
  },
},
{
  freezeTableName: true // Model tableName will be the same as the model name instead of being pluralized
});

const Colour = sequelize.define('colour', {
  col_label: {
    type: Sequelize.STRING
  },
  css_name: {
    type: Sequelize.STRING
  },
},
{
  freezeTableName: true // Model tableName will be the same as the model name instead of being pluralized
});

// force: true will drop the table if it already exists
tableName.sync({force: true});
  // Table created


// Makes the  Model available for other files (will also create a table)
module.exports = Messages;
module.exports = Message_Cat;
module.exports = Fonts;
module.exports = Colour;
