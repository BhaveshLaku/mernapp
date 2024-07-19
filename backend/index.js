const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db");

// Connect to MongoDB
mongoDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
