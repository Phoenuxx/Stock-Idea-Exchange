const express = require("express");
const db = require("../../models");

const app = express();

// Matches with "/api/user/<username-here>"
app.get('/:username', function(req,res) { 
  db.User.find({where: {username: "Phoenux"}})
  .then(function(dbUser) {
    // If we were able to successfully find User, send them back to the client
    console.log(dbUser);
    res.json(dbUser);
  })
  .catch(function(err) {
    // If an error occurred, send it to the client
    res.json(err);
  });
});

// Matches with "/api/:id"
// router
//   .route("/:id")
//   .get(List.findById)
//   .put(List.update)
//   .delete(List.remove);

module.exports = app;
