const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");
require("dotenv").config();

mongoose.connect(process.env.MONGO_DB);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connect err"));
db.once("open", () => {
  console.log("DB Connected");
});

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("hi");
});

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
