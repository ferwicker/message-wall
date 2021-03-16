// Sequelize (capital) references the standard library
const Sequelize = require('sequelize');
// sequelize (lowercase) references my connection to the DB.
const sequelize = require('../config/config.js');

// Creates a message model that matches up with DB

module.exports = (sequelize, DataTypes) => {
const Messages = sequelize.define('messages', {
  id: {
    type: DataTypes.id,
    prmiaryKey: true,
    allowNull: false
  },
  message_desc: {
    type: DataTypes.STRING
  },
  message_cat_id: {
    type: DataTypes.STRING,
    foreignKey: true,
  },
  likes: {
    type: DataTypes.INTEGER
  },
  colour_id: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
  font_id: {
    type: DataTypes.INTEGER,
    foreignKey: true
  }
}),
return Messages;
};

// force: true will drop the table if it already exists
tableName.sync({force: true});
  // Table created




