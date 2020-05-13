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
exports.getCategories = (req, res, next) => {
  Category.find()

    .then(() => console.log(res))

    .catch((err) => console.log(err));
};
exports.findCategory = (req, res, next) => {
  // const id = req.body._id;

  // Category.findOne({ id })
  //   .then((category) => {
  //     if (!category) {
  //       return res

  //         .status(423)

  //         .send("Category not found");
  //     }
  //   })
  //   .then(() => res.status(200).send(res))

  //   .catch((err) => console.log(err));
  const category = Category.findById(req.params.id)
    .then((category) => {
      if (!category) {
        return res

          .status(423)

          .send("Category not found");
      }
    })
    .then(() => res.status(200).send(category))

    .catch((err) => console.log(err));
};
exports.deleteCategory = (req, res, next) => {
  const deleted = Category.remove({ _id: req.params.id })
    .then(() => res.status(200).send())

    .catch((err) => console.log(err));
};
