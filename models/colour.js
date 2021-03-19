module.exports = (sequelize, DataTypes) => {
  const Colour = sequelize.define(
    "colour",
    {
      col_label: {
        type: DataTypes.STRING
      },
      css_name: {
        type: DataTypes.STRING
      }
    },
    // {
    //   freezeTableName: true // Model tableName will be the same as the model name instead of being pluralized
    // }
  );
  return Colour;
};
