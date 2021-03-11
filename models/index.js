
// Sequelize (capital) references the standard library
const Sequelize = require('sequelize');
// sequelize (lowercase) references my connection to the DB.
const sequelize = require('../config/config.js');

// Creates a message model that matches up with DB
const Messages = sequelize.define('messages', {
  message_desc: Sequelize.STRING,
  message_cat_id: Sequelize.STRING,
  likes: Sequelize.INTEGER,
});

const Message_Cat = sequelize.define('message_cat', {
  cat_desc: Sequelize.STRING,
});

const sequelize = new Sequelize('sqlite::memory:', {
  define: {
    freezeTableName: true
  }
});
// Syncs with DB
message_wall.sync();

// Makes the  Model available for other files (will also create a table)
module.exports = Messages;
module.exports = Message_Cat;

