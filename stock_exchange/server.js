const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const passportSetup = require('./config/passport-setup');
const keys = require('./config/keys');
const authRoutes = require('./routes/authRoutes');
const apiRoutes = require('./routes/apiRoutes')
const PORT = process.env.PORT || 3000;

// Require all models
const db = require("./models");

// Initialize Express
const app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect(process.env.mongodb.dbURI || "mongodb://localhost/StockExchangeDB", { useNewUrlParser: true });

// Routes


//set up Auth routes
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

// Points server to the "route" files.
require("./routes/htmlRoutes")(app);

// Start the server
app.listen(PORT, () => {
  console.log("App running on port " + PORT);
});
