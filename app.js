const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authUser = require("./router/userauth");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(authUser);

mongoose
  .connect(
    "mongodb+srv://Robertito1:Titoroti777@cluster0-rnhzs.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )

  .then((result) => {
    console.log("database connected");
    app.listen(3000);
  })
  .catch((err) => console.log(err));
