const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

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

// POST => /localhost:8000/students   => Create a students data
app.post("/students", async (req, res) => {
  // 1, Data from front-end
  const data = req.body;
  // {
  //   "roll_no": "1",
  //   "name": "raj",
  //   "gender": "male",
  //   "std": "10th",
  //   "blood_group": "ab+"
  // },

  // 2, DB logic
  const newStudentData = await prisma.students.create({
    data: {
      roll_no: data.roll_no,
      name: data.name,
      gender: data.gender,
      std: data.std,
      blood_group: data.blood_group,
    },
  });

  // 3, Data to front-end
  res.send("Student Created", newStudentData);
});

// put --> localhost:3000/students    =>
app.put("/students", async (req, res) => {
  // 1, data from front-end
  const data = req.body;

  // 2, DB logic
  const newUpdatedData = await prisma.students.update({
    where: {
      roll_no: data.roll_no,
    },
    data: {
      roll_no: data.roll_no,
      name: data.name,
      std: data.std,
      gender: data.gender,
      blood_group: data.blood_group,
    },
  });

  // 3, data to front-end
  res.send("Student data updated", newUpdatedData);
});

// delete --> localhost:3000/students
app.delete("/students", async (req, res) => {
  // 1, data from front-end
  const data = req.body;

  // 2, DB logic
  await prisma.students.delete({
    where: {
      roll_no: data.roll_no,
    },
  });

  // 3, data to front-end
  res.send("Student data deleted");
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log("Api is ready to work", PORT);
});
