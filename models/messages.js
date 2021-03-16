const sequelize = require("sequelize");

// Creates a message model that matches up with DB
module.exports = (sequelize, Datatypes) => {
    const Messages = sequelize.define('messages', {
  message_desc: {
    type: Datatypes.STRING
  },
  message_cat_id: {
    type: Datatypes.STRING
  },
  likes: {
    type: Datatypes.INTEGER
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
