// Sequelize (capital) references the standard library
const Sequelize = require('sequelize');
// sequelize (lowercase) references my connection to the DB.
const sequelize = require('../config/config.js');

module.exports = (sequelize, DataTypes) => {
    const Fonts = sequelize.define('fonts', {
      id: {
        type: DataTypes.INTEGER,
        prmiaryKey: true
      },
      font_label: {
        type: DataTypes.STRING
      },
      css_col: {
        type: DataTypes.STRING
      },
    }),
    return Fonts;
    };

    // force: true will drop the table if it already exists
tableName.sync({force: true});
// Table created