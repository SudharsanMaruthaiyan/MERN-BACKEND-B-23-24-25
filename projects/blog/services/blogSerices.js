const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const gettAllBlogL = async () => {
  try {
    const blog = await prisma.blog.findMany();
    return blog;
  } catch (error) {
    console.log(error);
  }
};

const getBlogByIdL = async (blog_id) => {
  try {
    const blog = await prisma.blog.findUnique({
      where: {
        blog_id: blog_id,
      },
    });

    return blog;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { gettAllBlogL, getBlogByIdL };
