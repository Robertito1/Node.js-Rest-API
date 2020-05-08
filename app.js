const express = require("express");
const app = express();
const mongoose = require("mongoose");
const auth = require("./router/auth");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/signup", auth);
app.use("/login", auth);

mongoose
  .connect(
    "mongodb+srv://Robertito1:Titoroti777@cluster0-rnhzs.mongodb.net/test?retryWrites=true&w=majority"
    // { useNewUrlParser: true, useUnifiedTopology: true }
  )

  .then((result) => {
    result.send(
      "append your role eg '/tutor' to the endpoint and make a post request"
    );
    console.log("database connected");
    const port = process.env.PORT || 3000;
    app.listen(port);
  })
  .catch((err) => console.log(err));
