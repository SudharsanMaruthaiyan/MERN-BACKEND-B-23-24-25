const express = require("express");

// create an instance of http server
const app = express();

const PORT = 8000;

app.get("/product", (req, res) => {
  // 1, Data from front-end

  // 2, DB logic

  // 3, data to front-end
  res.send("Hello express!!");
});

app.get("/bus", (req, res) => {
  // 1, Data from front-end

  // 2, DB logic

  // 3, data to front-end
  res.send("Hello bus 1");
});

app.listen(PORT, () => {
  console.log(`Api is working in port ${PORT}`);
});
