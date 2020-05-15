const router = require("express").Router();
const {
  createCategory,
  findCategory,
  getCategories,
  // deleteCategory,
} = require("../controller/category");
// const { verifyToken } = require("../middleware");

router.post("/", createCategory);
router.get("/", getCategories);
router.get("/:id", findCategory);
// router.delete("/:id", deleteCategory);

module.exports = router;
