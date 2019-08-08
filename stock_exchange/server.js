const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require('./routes/authRoutes');
// const passportSetup = require('./config/passport-setup');
// const keys = require('./config/keys');
const routes = require("./routes");

const PORT = process.env.PORT || 8080;

// Require all models
// const db = require("./models");

// Initialize Express
const app = express();

// Middleware defined
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Make public a static folder
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.dbURI || "mongodb://localhost/StockExchangeDB", { useNewUrlParser: true });

// Routes


//set up Auth routes
app.use(routes);

app.get('/user/:username', function(req,res) { 
  console.log(req);
  db.User.find({where: {username: req.process.username}})
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

// Start the server
app.listen(PORT, () => {
  console.log("App running on port " + PORT);
});
