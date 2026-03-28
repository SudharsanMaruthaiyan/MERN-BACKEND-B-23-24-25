const { PrismaClient } = require("@prisma/client");
const { gettAllBlogL, getBlogByIdL } = require("../services/blogSerices");

const prisma = new PrismaClient();

const getAllBlog = async (req, res) => {
  try {
    // 1, Data from Front-end

    // 2, Db logic
    const blog = await gettAllBlogL();

    // 3, Data to front-end
    res.status(200).json({ message: "Data fetched successfully", data: blog });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getBlogById = async (req, res) => {
  try {
    // 1, Data from Front-end
    const { blog_id } = req.params;

    // 2, Db logic
    const blog = await getBlogByIdL(blog_id);

    // 3, Data to front-end
    res.status(200).json({ message: "Data fetched", data: blog });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { getAllBlog, getBlogById };
