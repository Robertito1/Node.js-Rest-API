const Student = require("../models/student.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.studentsignUp = (req, res, next) => {
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

  Student.findOne({ email }).then((student) => {
    if (student) {
      return res

        .status(423)

        .send({ status: false, message: "This email alreadyexists" });
    }
  });

  bcrypt

    .hash(password, 12)

    .then((password) => {
      let student = new Student({
        name,
        email,

        password,
      });

      return student.save();
    })

    .then(() =>
      res
        .status(200)
        .send({ status: true, message: "Student registered successfully" })
    )

    .catch((err) => console.log(err));
};
exports.studentlogIn = (req, res, next) => {
  const email = req.body.email;

  const password = req.body.password;

  Student.findOne({ email })

    .then((student) => {
      if (!student) {
        return res

          .status(404)

          .send("Student not found, please provide valid credentials");
      }

      bcrypt.compare(password, student.password).then((valid) => {
        if (!valid) {
          return res

            .status(403)

            .send(
              "Incorrect username or password, please review details and try again"
            );
        }

        const token = jwt.sign(
          { email: student.email, _id: student._id },

          "somesecretkey",

          { expiresIn: "1hr" }
        );

        res.status(200).send({
          _id: student._id,

          token,
        });
      });
    })

    .catch((err) => console.log(err));
};
