require("dotenv").config();
const db = require("./services/db");

const express = require("express");

const app = express();

app.use(express.json());


// Connect DB
db.connect();

app.get("/", (req, res) => {
  res.send("Hello World");
});


module.exports = app;


