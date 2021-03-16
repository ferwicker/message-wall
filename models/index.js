
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

module.exports = (sequelize, DataTypes) => {
const Message_Cat = sequelize.define('message_cat', {
  id: {
    type: DataTypes.INTEGER,
    prmiaryKey: true
  },
  cat_desc: {
    type: DataTypes.STRING
  },

}),
 return Message_Cat;
};

module.exports = (sequelize, DataTypes) => {
const Fonts = sequelize.define('fonts', {
  id: {
    type: DataTypes.INTEGER,
    prmiaryKey: true
  },
  font_label: {
    type: DataTypes.STRING
  },
  css_col: {
    type: DataTypes.STRING
  },
}),
return Fonts;
};

module.exports = (sequelize, DataTypes) => {
const Colour = sequelize.define('colour', {
  id: {
    type: DataTypes.INTEGER,
    prmiaryKey: true
  },
  col_label: {
    type: DataTypes.STRING
  },
  css_name: {
    type: DataTypes.STRING
  },
}),
  return Colour;
};

// force: true will drop the table if it already exists
tableName.sync({force: true});
  // Table created
