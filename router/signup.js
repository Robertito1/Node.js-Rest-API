const router = require("express").Router();
const { tutorsignUp } = require("../controller/tutorauth");
const { studentsignUp } = require("../controller/studentauth");
router.get("/", (req, res) => {
  res.send("this is signup");
});
router.post("/tutor", tutorsignUp);
router.post("/student", studentsignUp);

module.exports = router;
