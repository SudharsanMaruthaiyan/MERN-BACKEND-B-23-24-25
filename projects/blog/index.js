const { PrismaClient } = require("@prisma/client");
const express = require("express");

const app = express();
const prisma = new PrismaClient();

const PORT = 5000;

// get
app.get("/", (req, res) => {
  res.send("Welcome to Blog API");
});

// GET  =>   /blogs   => Fetch all blog data
app.get("/blogs", async (req, res) => {
  try {
    // 1, Data from Front-end

    // 2, Db logic
    const blog = await prisma.blog.findMany();

    // 3, Data to front-end
    res.status(200).json({ message: "Data fetched successfully", data: blog });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// GET  =>  /blogs/:blog_id   => Fetch the blog data by id
app.get("/blogs/:blog_id", async (req, res) => {
  try {
    // 1, Data from Front-end
    const { blog_id } = req.params;

    // 2, Db logic
    const blog = await prisma.blog.findUnique({
      where: {
        blog_id: blog_id,
      },
    });

    // 3, Data to front-end
    res.status(200).json({ message: "Data fetched", data: blog });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log("Api is working fine....");
});
