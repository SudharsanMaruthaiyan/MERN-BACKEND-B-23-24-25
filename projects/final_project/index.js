const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.get("/", (req, res) => {
  res.send("Api is working for final_project");
});

// GET:  =>  /products   => Fetch all the product Data
app.get("/products", async (req, res) => {
  try {
    // 1, Data from Front-end

    // 2, DB logic
    const productData = await prisma.products.findMany();

    // 3, Data to front-end
    res.status(200).json({
      message: "successfully fetched the products data",
      data: productData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error: error });
  }
});

// GET:  =>  /products/:product_id   => Fetch the product Data By Id
app.get("/products/:product_id", async (req, res) => {
  try {
    // 1, Data from Front-end
    const { product_id } = req.params;

    // 2, DB LOGIC
    const productDetailData = await prisma.products.findUnique({
      where: {
        product_id: product_id,
      },
    });

    // 3, Data to front-end
    res.status(200).json({ message: "Data fetched", data: productDetailData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error: error });
  }
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log("Api is working...");
});
