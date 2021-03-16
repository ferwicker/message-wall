module.exports = (sequelize, DataTypes) => {
const Message_Cat = sequelize.define('message_cat', {
    cat_desc:{
      type: DataTypes.STRING
    },
  },
  {
    freezeTableName: true // Model tableName will be the same as the model name instead of being pluralized
  });
  return Message_Cat;
};

// force: true will drop the table if it already exists
tableName.sync({force: true});
  // Table created
