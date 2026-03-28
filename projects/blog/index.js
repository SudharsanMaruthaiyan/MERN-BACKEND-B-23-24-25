const express = require("express");
const blogRoute = require("./routes/blogRoutes");

const app = express();
const Razorpay = require("razorpay");
app.use(express.json());

const PORT = 5000;

var instance = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECERT,
});

// get
app.get("/", (req, res) => {
  res.send("Welcome to Blog API");
});

app.post("/order", async (req, res) => {
  // 1, Data from front-end
  const amount = req.body;

  // 2, DB logic
  const razorpayOrder = await instance.orders.create({
    amount: amount.amount,
    currency: "INR",
    receipt: "receipt#1",
    partial_payment: false,
    notes: {
      key1: "value3",
      key2: "value2",
    },
  });

  // 3, Data to front-end
  res.send(razorpayOrder);
});

app.use("/v1", blogRoute);

app.listen(PORT, () => {
  console.log("Api is working fine....");
});
