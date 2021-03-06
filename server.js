// Requiring necessary npm packages
const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8000;

const db = require("./models");

// Creating express app and configuring middleware needed for authentication

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Requiring our routes
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});
