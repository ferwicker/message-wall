// Sequelize (capital) references the standard library
const Sequelize = require('sequelize');
// sequelize (lowercase) references my connection to the DB.
const sequelize = require('../config/config.js');

module.exports = (sequelize, DataTypes) => {
    const Message_Cat = sequelize.define('message_cat', {
      id: {
        type: DataTypes.INTEGER,
        prmiaryKey: true
      },
      cat_desc: {
        type: DataTypes.STRING
      },
    
    }),
     return Message_Cat;
    };

    // force: true will drop the table if it already exists
tableName.sync({force: true});
// Table created