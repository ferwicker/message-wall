// Dependencies
const path = require('path');

// Routes
module.exports = (app) => {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/wall", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get("/add", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
};
