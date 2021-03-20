module.exports = (sequelize, DataTypes) => {
  const Colour = sequelize.define(
    "colour",
    {
      colour_label: {
        type: DataTypes.STRING
      },
      colour_css: {
        type: DataTypes.TEXT
      }
    },
    {
      freezeTableName: true // Model tableName will be the same as the model name instead of being pluralized
    }
  );

  return Colour;
};