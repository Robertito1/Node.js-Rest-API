const Category = require("../models/category");

exports.createCategory = (req, res, next) => {
  const name = req.body.name;

  const subject = req.body.subject;

  Category.findOne({ name })

    .then((category) => {
      if (category) {
        return res

          .status(423)

          .send("A Category with such name already");
      }
    })
    .then(() => {
      let category = new Category({
        name,
        subject,
      });
      return category.save();
    })

    .then(() =>
      res.status(200).send({ status: true, message: "Category Created" })
    )

    .catch((err) => console.log(err));
};
