const express = require("express");
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

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
      const hashedPassword = await bcrypt.hash(data.password, 10);

      const newUser = await prisma.users.create({
        data: {
          email_id: data.email_id,
          password: hashedPassword,
          phone_number: data.phone_number,
        },
      });

      const { password, ...datas } = newUser;

      // 3, data to front-end
      res
        .status(200)
        .json({ message: "user register successfully", data: datas });
    }
  } catch (error) {
    // console.log("Internal server error");
    res.status(500).json({ message: "Internal server error", error: error });
  }
});

// POST => /login   => Login the new user
app.post("/login", async (req, res) => {
  // 1, Data from Front-end
  const data = req.body;
  // {
  //   email_id: "",
  //   password: ""
  // }

  // 2, DB Logic
  const isUserExists = await prisma.users.findUnique({
    where: {
      email_id: data.email_id,
    },
  });

  if (isUserExists) {
    const { password, ...datas } = isUserExists;
    // Check password
    // generate keys
    bcrypt.compare(
      data.password,
      isUserExists.password,
      function (err, result) {
        if (result) {
          var temp_key = jwt.sign(
            { user_id: isUserExists.user_id, email_id: isUserExists.email_id },
            "sd-rooms",
            { expiresIn: "5s" },
          );

          var main_key = jwt.sign(
            {
              user_id: isUserExists.user_id,
              email_id: isUserExists.email_id,
            },
            "sd-main-rooms",
            { expiresIn: "10s" },
          );

          const datass = {
            token: {
              temp_key,
              main_key,
            },
            ...datas,
          };

          res.status(200).json({ message: "Login Successfully", data: datass });
        } else {
          res.status(401).json({ message: "Password is incorrect" });
        }
      },
    );
  } else {
    res
      .status(404)
      .json({ message: "User email does'nt exists, go and register first" });
  }

  // 3, Data to front-end
});

// POST => /refresh
app.post("/refresh", (req, res) => {
  // 1, Data from front-end
  const data = req.body;

  // 2, Db logic
  jwt.verify(data.main_key, "sd-main-rooms", (err, decoded) => {
    if (!err) {
      const temp_key = jwt.sign(
        {
          user_id: decoded.user_id,
          email_id: decoded.email_id,
        },
        "sd-rooms",
        { expiresIn: "5s" },
      );

      res.status(200).json({ message: "Token Generated", data: temp_key });
    } else {
      res.status(401).json({ message: "Invalid Token" });
    }
  });

  // 3, Data to front-end
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Auth api is working...", PORT);
});
