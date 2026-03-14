const express = require("express");

// create an instance of http server
const app = express();

const PORT = 8000;

app.get("/asd", (req, res) => {
  res.send("Hello World! Developer...");
});

app.listen(PORT, () => {
  console.log(`Api is working on ${PORT}`);
});
