const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

const PORT = 8000;

// get ==> send response
app.get("/", (req, res) => {
  // 1, data from front-end

  // 2, DB logic

  // 3, Data to front-end
  res.send("Api is working");
});

// GET => /restaurants  => Fetch all restaurants data
app.get("/restaurants", async (req, res) => {
  try {
    // 1, Data fromt Front-end

    // 2, DB  logic
    const restaurantData = await prisma.restaurants.findMany();

    // 3, Data to Front-end
    res.send(restaurantData);
  } catch (error) {
    console.log("Internal server error", error);
  }
});

// GET => /restaurant/:id  => Fetch a restaurant by id
app.get("/restaurant/:id", async (req, res) => {
  try {
    // 1, Data from front-end
    const data = req.params;

    // 2, DB LOGIC
    const restaurantDataById = await prisma.restaurants.findUnique({
      where: {
        restaurant_id: data.id,
      },
    });

    // 3, Data to front-end
    res.status(200).json({
      message: "data get by id successfully ",
      data: restaurantDataById,
    });
  } catch (error) {
    console.log("Internal server error ", error);
    res.status(500).json({ message: "INTERNAL SERVER ERROR", error: error });
  }
});

// POST => /restaurants => Create a restaurants data
app.post("/restaurants", async (req, res) => {
  try {
    // 1, Data from front-end
    const data = req.body;

    // 2, DB LOGIC
    const newRestaurantData = await prisma.restaurants.create({
      data: {
        name: data.name,
        location: data.location,
        image_url: data.image_url,
        offer: data.offer,
      },
    });

    // 3, Data to front-end
    res.status(200).json({
      message: "Restaurant Create successfully",
      data: newRestaurantData,
    });
  } catch (error) {
    console.log("Internal server error ", error);
    res.status(500).json({ message: "INTERNAL SERVER ERROR", error: error });
  }
});

// PUT => /localhost:8000/restaurant => update the restaurant
app.put("/restaurant", async (req, res) => {
  try {
    // 1, Data from front-end
    const data = req.body;

    // 2, DB logic
    const newUpdatedRestaurant = await prisma.restaurants.update({
      where: {
        restaurant_id: data.restaurant_id,
      },
      data: {
        name: data.name,
        location: data.location,
        image_url: data.image_url,
        offer: data.offer,
      },
    });

    // 3, Data to front-end
    res.status(200).json({
      message: "Data Updated Successfully",
      data: newUpdatedRestaurant,
    });
  } catch (error) {
    console.log("Internal server error", error);
    res.status(500).json({ message: "Internal server error", error: error });
  }
});

// DELETE => /restaurant  => delete the restaurant data
app.delete("/restaurant", async (req, res) => {
  try {
    // 1, Data from front-end
    const data = req.body;

    // 2, DB logic
    await prisma.restaurants.delete({
      where: {
        restaurant_id: data.restaurant_id,
      },
    });

    // 3, Data to front-end
    res.status(200).json({ message: "Restaurant Delete successfully" });
  } catch (error) {
    console.log("Internal server error", error);
    res.status(500).json({ message: "Internal server error", error: error });
  }
});

app.listen(PORT, () => {
  console.log("Api is ready work..", PORT);
});
