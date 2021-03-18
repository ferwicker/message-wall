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
    colour.hasMany(messages, { foreignKey: id }),
    {
      freezeTableName: true // Model tableName will be the same as the model name instead of being pluralized
    }
  );

  // // force: true will drop the table if it already exists
  // Colour.sync({ force: true });
  // // Table created

  return Colour;
};
