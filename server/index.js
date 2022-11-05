require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const dbCannect = require("./dbConfig");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const port = process.env.PORT || 8080;
const mongodb= process.env.MONGODB_URL || 8081

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);


dbCannect(mongodb, {
    useNewUrlParser: true,
    useUnifiedToplogy: true,
    userCreateIndex: true,
  }).then((data) => {
    const server = app.listen(port, () => {
      console.log(
        `Db is connected to ${mongodb}, and server is running on ${port}`
      );
    });
  });
