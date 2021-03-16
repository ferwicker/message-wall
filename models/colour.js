module.exports = (sequelize, DataTypes) => {
const Colour = sequelize.define('colour', {
    col_label: {
      type: DataTypes.STRING
    },
    css_name: {
      type: DataTpyes.STRING
    },
  },
  {
    freezeTableName: true // Model tableName will be the same as the model name instead of being pluralized
  });
  return Colour;
};
  
// force: true will drop the table if it already exists
tableName.sync({force: true});
// Table created
