module.exports = function(sequelize, DataTypes){
  const Category = sequelize.define(
    "categories",
    {
      category_label: {
        type: DataTypes.STRING
      }
    },
    {
      timestamps: false,
      freezeTableName: true // Model tableName will be the same as the model name instead of being pluralized
    }
  );

  return Category;
};
