// initialization
const express = require("express");
require("dotenv").config();
const app = require("./src/app.js");
const mongoose = require("mongoose");
const cors = require("cors");

const path = require("path");

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE
const DATABASE_URL = process.env.MONGODB_URL;

mongoose.connect(`${DATABASE_URL}/mydb`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("connected to database"));

// Static Files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
