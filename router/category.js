const router = require("express").Router();
const { createCategory } = require("../controller/category");
// const verifyToken = require("../middleware");

router.post("/", createCategory);

module.exports = router;
