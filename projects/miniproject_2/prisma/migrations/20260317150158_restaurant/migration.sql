-- CreateTable
CREATE TABLE "Restaurants" (
    "restaurant_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "offer" TEXT NOT NULL,

    CONSTRAINT "Restaurants_pkey" PRIMARY KEY ("restaurant_id")
);
