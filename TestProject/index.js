import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();

const prisma = new PrismaClient();

app.get("/", (req, res) => {
  res.send("Api is working..");
});

app.get("/api/v1", async (req, res) => {
  const data = await prisma.students.findMany();
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
