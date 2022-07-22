const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/css", (req, res) => {
  res.sendFile(path.join(__dirname, "/styles.css"));
});

app.get("/js", (req, res) => {
  res.sendFile(path.join(__dirname, "/main.js"));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example listnening on ${port}`);
});