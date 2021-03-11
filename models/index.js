
// Sequelize (capital) references the standard library
const Sequelize = require('sequelize');
// sequelize (lowercase) references my connection to the DB.
const sequelize = require('../config/config.js');

// Creates a "Book" model that matches up with DB
const Messages = sequelize.define('messages', {
  message_desc: Sequelize.STRING,
  message_cat_id: Sequelize.STRING,
  likes: Sequelize.INTEGER,
});

const Message_Cat = sequelize.define('message_cat', {
  cat_desc: Sequelize.STRING,
});

// Syncs with DB
message_wall.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = message_wall;

// 'use strict';

// var fs        = require('fs');
// var path      = require('path');
// var Sequelize = require('sequelize');
// var basename  = path.basename(module.filename);
// var env       = process.env.NODE_ENV || 'development';
// var config    = require(__dirname + '/../config/config.json')[env];
// var db        = {};

// if (config.use_env_variable) {
//   var sequelize = new Sequelize(process.env[config.use_env_variable]);
// } else {
//   var sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs
//   .readdirSync(__dirname)
//   .filter(function(file) {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(function(file) {
//     var model = sequelize['import'](path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(function(modelName) {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;
