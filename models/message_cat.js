const Message_Cat = sequelize.define('message_cat', {
    cat_desc:{
      type: Sequelize.STRING
    },
  },
  {
    freezeTableName: true // Model tableName will be the same as the model name instead of being pluralized
  });

// force: true will drop the table if it already exists
tableName.sync({force: true});
  // Table created
