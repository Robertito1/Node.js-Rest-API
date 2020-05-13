const express = require("express");
const app = express();
const mongoose = require("mongoose");
const login = require("./router/login");
const signup = require("./router/signup");
const level = require("./router/category");
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/signup", signup);
app.use("/login", login);
app.use("/categories", level);
app.get("/", (req, res) => {
  res.send("this is home");
});
mongoose
  .connect(
    "mongodb+srv://Robertito1:Titoroti777@cluster0-rnhzs.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )

  .then(() => {
    console.log("database connected");
    const port = process.env.PORT || 3000;
    app.listen(port);
  })
  .catch((err) => console.log(err));
