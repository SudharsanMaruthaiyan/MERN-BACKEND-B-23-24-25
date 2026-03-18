const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.restaurants.createMany({
    data: [
      {
        name: "Spicy Village",
        location: "Chennai",
        image_url: "https://source.unsplash.com/400x300/?restaurant,food",
        offer: "20% OFF on all orders",
      },
      {
        name: "Burger Hub",
        location: "Bangalore",
        image_url: "https://source.unsplash.com/400x300/?burger",
        offer: "Buy 1 Get 1 Free",
      },
      {
        name: "Pizza Palace",
        location: "Hyderabad",
        image_url: "https://source.unsplash.com/400x300/?pizza",
        offer: "Flat ₹100 OFF",
      },
      {
        name: "South Spice",
        location: "Madurai",
        image_url: "https://source.unsplash.com/400x300/?south-indian-food",
        offer: "15% OFF on combos",
      },
      {
        name: "Tandoori Treat",
        location: "Delhi",
        image_url: "https://source.unsplash.com/400x300/?tandoori",
        offer: "Free starter on orders above ₹500",
      },
      {
        name: "Seafood Delight",
        location: "Goa",
        image_url: "https://source.unsplash.com/400x300/?seafood",
        offer: "25% OFF weekend special",
      },
      {
        name: "Veggie World",
        location: "Coimbatore",
        image_url: "https://source.unsplash.com/400x300/?vegetarian-food",
        offer: "10% OFF on all veg dishes",
      },
      {
        name: "BBQ Nation Style",
        location: "Mumbai",
        image_url: "https://source.unsplash.com/400x300/?bbq",
        offer: "Unlimited buffet at ₹699",
      },
      {
        name: "Cafe Brew",
        location: "Pune",
        image_url: "https://source.unsplash.com/400x300/?cafe,coffee",
        offer: "Free coffee with breakfast",
      },
      {
        name: "Dessert Heaven",
        location: "Kolkata",
        image_url: "https://source.unsplash.com/400x300/?dessert",
        offer: "Buy 2 Get 1 Free desserts",
      },
    ],
  });

  console.log("✅ Seed data inserted successfully!");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
