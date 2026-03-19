const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api is working...");
});

// POST => /register
app.post("/register", async (req, res) => {
  try {
    // 1, Data from front-end
    const data = req.body;

    // {
    //     email_id: "",
    //     password: "",
    //     phone_number: ""
    // }

    // 2, DB logic
    const isUserExists = await prisma.users.findUnique({
      where: {
        email_id: data.email_id,
      },
    });

    if (isUserExists) {
      res.status(401).json({ message: "User email already exists" });
    } else {
      const newUser = await prisma.users.create({
        data: {
          email_id: data.email_id,
          password: data.password,
          phone_number: data.phone_number,
        },
      });

      // 3, data to front-end
      res
        .status(200)
        .json({ message: "user register successfully", data: newUser });
    }
  } catch (error) {
    // console.log("Internal server error");
    res.status(500).json({ message: "Internal server error", error: error });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Auth api is working...", PORT);
});
