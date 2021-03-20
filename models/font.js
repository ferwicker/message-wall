module.exports = (sequelize, DataTypes) => {
  const Fonts = sequelize.define(
    "fonts",
    {
      font_label: {
        type: DataTypes.STRING
      },
      css_col: {
        type: DataTypes.STRING
      }
    },
    {
      timestamps: false
    },
    {
      freezeTableName: true // Model tableName will be the same as the model name instead of being pluralized
    }
  );

  // // force: true will drop the table if it already exists
  // Fonts.sync({ force: true });
  // // Table created

  return Fonts;
};
