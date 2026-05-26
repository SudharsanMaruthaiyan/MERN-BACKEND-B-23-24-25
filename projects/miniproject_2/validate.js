app.get("/restaurant/:id", async (req, res) => {
  try {
    // 1. Get ID from params
    const { id } = req.params;

    // 2. Validation
    if (!id) {
      return res.status(400).json({
        message: "Restaurant ID is required",
      });
    }

    // Optional:
    // If your ID should be a number
    if (isNaN(id)) {
      return res.status(400).json({
        message: "Invalid restaurant ID",
      });
    }

    // 3. DB Logic
    const restaurantDataById = await prisma.restaurants.findUnique({
      where: {
        restaurant_id: Number(id),
      },
    });

    // 4. Check data exists
    if (!restaurantDataById) {
      return res.status(404).json({
        message: "Restaurant not found",
      });
    }

    // 5. Send response
    res.status(200).json({
      message: "Data fetched successfully",
      data: restaurantDataById,
    });
  } catch (error) {
    console.log("Internal server error:", error);

    res.status(500).json({
      message: "INTERNAL SERVER ERROR",
      error: error.message,
    });
  }
});



app.post("/restaurants", async (req, res) => {
  try {
    // 1. Data from frontend
    const { name, location, image_url, offer } = req.body;

    // 2. Validation

    // Required fields
    if (!name || !location || !image_url || !offer) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Name validation
    if (name.length < 3) {
      return res.status(400).json({
        message: "Restaurant name must be at least 3 characters",
      });
    }

    // Location validation
    if (location.length < 3) {
      return res.status(400).json({
        message: "Location must be at least 3 characters",
      });
    }

    // Image URL validation
    const urlPattern =
      /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i;

    if (!urlPattern.test(image_url)) {
      return res.status(400).json({
        message: "Invalid image URL",
      });
    }

    // Offer validation
    if (offer.length < 2) {
      return res.status(400).json({
        message: "Offer field is too short",
      });
    }

    // 3. DB Logic
    const newRestaurantData = await prisma.restaurants.create({
      data: {
        name,
        location,
        image_url,
        offer,
      },
    });

    // 4. Response
    res.status(201).json({
      message: "Restaurant created successfully",
      data: newRestaurantData,
    });
  } catch (error) {
    console.log("Internal server error:", error);

    res.status(500).json({
      message: "INTERNAL SERVER ERROR",
      error: error.message,
    });
  }
});