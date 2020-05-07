const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const categorieSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    subject: [],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Categorie", categorieSchema);
