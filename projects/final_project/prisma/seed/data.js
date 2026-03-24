const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.products.createMany({
    data: [
      {
        product_title: "iPhone 14",
        product_description: "Latest Apple smartphone",
        product_price: "799",
        product_discountPercentage: "10",
        product_rating: "4.8",
        product_brand: "Apple",
        product_thumbnail: "https://dummyimage.com/iphone14.jpg",
        product_tags: ["smartphone", "apple"],
        product_images: [
          "https://dummyimage.com/iphone14-1.jpg",
          "https://dummyimage.com/iphone14-2.jpg",
        ],
      },
      {
        product_title: "Samsung Galaxy S23",
        product_description: "Flagship Android phone",
        product_price: "699",
        product_discountPercentage: "12",
        product_rating: "4.7",
        product_brand: "Samsung",
        product_thumbnail: "https://dummyimage.com/s23.jpg",
        product_tags: ["smartphone", "samsung"],
        product_images: [
          "https://dummyimage.com/s23-1.jpg",
          "https://dummyimage.com/s23-2.jpg",
        ],
      },
      {
        product_title: "Sony Headphones",
        product_description: "Noise cancelling headphones",
        product_price: "199",
        product_discountPercentage: "15",
        product_rating: "4.6",
        product_brand: "Sony",
        product_thumbnail: "https://dummyimage.com/sony.jpg",
        product_tags: ["audio", "headphones"],
        product_images: [
          "https://dummyimage.com/sony-1.jpg",
          "https://dummyimage.com/sony-2.jpg",
        ],
      },
      {
        product_title: "Dell Laptop",
        product_description: "Powerful laptop for work",
        product_price: "999",
        product_discountPercentage: "8",
        product_rating: "4.5",
        product_brand: "Dell",
        product_thumbnail: "https://dummyimage.com/dell.jpg",
        product_tags: ["laptop", "work"],
        product_images: [
          "https://dummyimage.com/dell-1.jpg",
          "https://dummyimage.com/dell-2.jpg",
        ],
      },
      {
        product_title: "HP Pavilion",
        product_description: "Affordable laptop",
        product_price: "750",
        product_discountPercentage: "10",
        product_rating: "4.3",
        product_brand: "HP",
        product_thumbnail: "https://dummyimage.com/hp.jpg",
        product_tags: ["laptop", "budget"],
        product_images: [
          "https://dummyimage.com/hp-1.jpg",
          "https://dummyimage.com/hp-2.jpg",
        ],
      },
      {
        product_title: "Boat Earbuds",
        product_description: "Wireless earbuds",
        product_price: "49",
        product_discountPercentage: "20",
        product_rating: "4.2",
        product_brand: "Boat",
        product_thumbnail: "https://dummyimage.com/boat.jpg",
        product_tags: ["audio", "earbuds"],
        product_images: [
          "https://dummyimage.com/boat-1.jpg",
          "https://dummyimage.com/boat-2.jpg",
        ],
      },
      {
        product_title: "Apple Watch",
        product_description: "Smart wearable device",
        product_price: "399",
        product_discountPercentage: "5",
        product_rating: "4.7",
        product_brand: "Apple",
        product_thumbnail: "https://dummyimage.com/watch.jpg",
        product_tags: ["watch", "smart"],
        product_images: [
          "https://dummyimage.com/watch-1.jpg",
          "https://dummyimage.com/watch-2.jpg",
        ],
      },
      {
        product_title: "Mi Smart TV",
        product_description: "4K Smart TV",
        product_price: "599",
        product_discountPercentage: "18",
        product_rating: "4.4",
        product_brand: "Xiaomi",
        product_thumbnail: "https://dummyimage.com/tv.jpg",
        product_tags: ["tv", "smart"],
        product_images: [
          "https://dummyimage.com/tv-1.jpg",
          "https://dummyimage.com/tv-2.jpg",
        ],
      },
      {
        product_title: "Canon DSLR",
        product_description: "Professional camera",
        product_price: "850",
        product_discountPercentage: "10",
        product_rating: "4.6",
        product_brand: "Canon",
        product_thumbnail: "https://dummyimage.com/camera.jpg",
        product_tags: ["camera", "dslr"],
        product_images: [
          "https://dummyimage.com/camera-1.jpg",
          "https://dummyimage.com/camera-2.jpg",
        ],
      },
      {
        product_title: "Nike Shoes",
        product_description: "Comfortable running shoes",
        product_price: "120",
        product_discountPercentage: "25",
        product_rating: "4.5",
        product_brand: "Nike",
        product_thumbnail: "https://dummyimage.com/nike.jpg",
        product_tags: ["shoes", "sports"],
        product_images: [
          "https://dummyimage.com/nike-1.jpg",
          "https://dummyimage.com/nike-2.jpg",
        ],
      },
    ],
  });

  console.log("✅ 10 Products Seeded Successfully");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
