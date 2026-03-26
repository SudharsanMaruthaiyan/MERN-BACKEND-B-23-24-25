const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.blog.createMany({
    data: [
      {
        blog_title: "Introduction to MERN Stack",
        blog_description: "Basics of MERN stack development",
        blog_content:
          "MERN stack consists of MongoDB, Express, React, and Node.js...",
        blog_created_by: "Sudharsan",
      },
      {
        blog_title: "Understanding JavaScript Closures",
        blog_description: "Deep dive into closures",
        blog_content: "Closures are a fundamental concept in JavaScript...",
        blog_created_by: "Sara",
      },
      {
        blog_title: "React Hooks Guide",
        blog_description: "Learn useState and useEffect",
        blog_content:
          "React hooks allow functional components to manage state...",
        blog_created_by: "Arun",
      },
      {
        blog_title: "Node.js Event Loop Explained",
        blog_description: "How Node.js handles async tasks",
        blog_content: "The event loop is the heart of Node.js...",
        blog_created_by: "Kumar",
      },
      {
        blog_title: "MongoDB Basics",
        blog_description: "Introduction to NoSQL database",
        blog_content:
          "MongoDB is a NoSQL database that stores data in JSON-like format...",
        blog_created_by: "Priya",
      },
    ],
  });

  console.log("✅ 5 Blogs Seeded Successfully!");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
