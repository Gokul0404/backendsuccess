const express = require("express");
const cors = require("cors");

const app = express();
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

// router

const allRoutes = require("./router/student.routes");

app.use("/api", allRoutes)
    


mongoose
  .connect("mongodb://127.0.0.1:27017/gogul")
  .then(() => {
    app.listen(8080, () => {
      console.log("server created");
    });
  })
  .catch((err) => {
    console.log(err);
  });
