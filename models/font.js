module.exports = (sequelize, DataTypes) => {
  const Font = sequelize.define(
    "fonts",
    {
      font_label: {
        type: DataTypes.STRING
      },
      font_css: {
        type: DataTypes.TEXT
      }
    },
    {
      timestamps: false,
      freezeTableName: true // Model tableName will be the same as the model name instead of being pluralized
    }
  );

  //Font.hasMany(Message, {foreignKey: "id", sourceKey});

  return Font;
};
