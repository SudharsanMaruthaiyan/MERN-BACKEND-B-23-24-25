const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.get("/", (req, res) => {
  res.send("Api is working..");
});

// GET => /localhost:8000/students => Fetch all students data
app.get("/students", async (req, res) => {
  // 1, Data from Front-end
  // we need no data from front-end

  // 2, DB Logic
  const studentData = await prisma.students.findMany();

  // 3, Data to Front-end
  res.send(studentData);
});

// GET => /localhost:8000/student/:roll_no  => => Fetch a student by id
app.get("/student/:roll_no", async (req, res) => {
  // 1, Data from front-end
  const { roll_no } = req.params;

  // 2, DB logic
  //   console.log(roll_no);
  const studentDataById = await prisma.students.findUnique({
    where: {
      roll_no: roll_no,
    },
  });

  // 3, Data to Front-end
  res.send(studentDataById);
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log("Api is ready to work", PORT);
});
