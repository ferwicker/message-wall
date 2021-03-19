// Creates a message model that matches up with DB
module.exports = (sequelize, DataTypes) => {
  const Messages = sequelize.define('Messages', {
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
      type: DataTypes.INTEGER
    },
    colour_id: {
      type: DataTypes.INTEGER
    }
  });

  // freezeTableName: true; // Model tableName will be the same as the model name instead of being pluralized

  Messages.associate = (models) => {
    Messages.hasOne(models.Colour, models.Fonts, models.Message_Cat, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Messages;
};
