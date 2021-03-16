const { ForeignKeyConstraintError } = require("sequelize");

// Creates a message model that matches up with DB
module.exports = (sequelize, DataTypes) => {
    const Messages = sequelize.define('messages', {
  message_desc: {
    type: DataTypes.STRING
  },
  message_cat_id: {
    type: DataTypes.STRING
  },
  likes: {
    type: DataTypes.INTEGER
  },
  font_id: {
    type: DataTypes.INTEGER,
  },
  colour_id: {
    type: DataTypes.INTEGER
  },
},
{
  freezeTableName: true // Model tableName will be the same as the model name instead of being pluralized
});
return Messages;
};

// force: true will drop the table if it already exists
tableName.sync({force: true});
  // Table created
