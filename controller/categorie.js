const Categorie = require("../models/categorie");
const Tutor = require("../models/tutor");

exports.createCategorie = (req, res, next) => {
  const name = req.body.name;

  const subject = req.body.subject;

  Categorie.findOne({ name })

    .then((categorie) => {
      if (categorie) {
        return res

          .status(423)

          .send("A Categorie with such name already");
      }
    })
    .then(() => {
      let categorie = new Categorie({
        name,
        subject,
      });
      return student.save();
    })

    .then(() =>
      res.status(200).send({ status: true, message: "Category Created" })
    )

    .catch((err) => console.log(err));
};
