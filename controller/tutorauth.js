const Tutor = require("../models/tutor.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.tutorsignUp = (req, res, next) => {
  const name = req.body.name;

  const email = req.body.email;

  const password = req.body.password;

  if (!name || !email || !password) {
    res.status(400).send({
      status: false,

      message: "All fields are required",
    });

    return;
  }

  Tutor.findOne({ email }).then((tutor) => {
    if (tutor) {
      return res

        .status(423)

        .send({ status: false, message: "This email alreadyexists" });
    }
  });

  bcrypt

    .hash(password, 12)

    .then((password) => {
      let tutor = new Tutor({
        name,
        email,

        password,
      });

      return tutor.save();
    })

    .then(() =>
      res
        .status(200)
        .send({ status: true, message: "Tutor registered successfully" })
    )

    .catch((err) => console.log(err));
};
exports.tutorlogIn = (req, res, next) => {
  const email = req.body.email;

  const password = req.body.password;

  Tutor.findOne({ email })

    .then((tutor) => {
      if (!tutor) {
        return res

          .status(404)

          .send("User not found, please provide valid credentials");
      }

      bcrypt.compare(password, user.password).then((valid) => {
        if (!valid) {
          return res

            .status(403)

            .send(
              "Incorrect username or password, please review details and try again"
            );
        }

        const token = jwt.sign(
          { email: user.email, _id: user._id },

          "somesecretkey",

          { expiresIn: "1hr" }
        );

        res.status(200).send({
          _id: user._id,

          token,
        });
      });
    })

    .catch((err) => console.log(err));
};
