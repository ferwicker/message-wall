// Sequelize (capital) references the standard library
const Sequelize = require('sequelize');
// sequelize (lowercase) references my connection to the DB.
const sequelize = require('../config/config.js');

module.exports = (sequelize, DataTypes) => {
    const Colour = sequelize.define('colour', {
      id: {
        type: DataTypes.INTEGER,
        prmiaryKey: true
      },
      col_label: {
        type: DataTypes.STRING
      },
      css_name: {
        type: DataTypes.STRING
      },
    }),
      return Colour;
    };
    
    // force: true will drop the table if it already exists
tableName.sync({force: true});
// Table created