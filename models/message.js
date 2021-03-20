// Creates a message model that matches up with DB
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define(
    "messages",
    {
      message_body: {
        type: DataTypes.STRING
      },
      category_id: {
        type: DataTypes.STRING
      },
      font_id: {
        type: DataTypes.INTEGER
      },
      colour_id: {
        type: DataTypes.INTEGER
      }
    },
    {
      freezeTableName: true // Model tableName will be the same as the model name instead of being pluralized
    }
  );

  return Message;
};

