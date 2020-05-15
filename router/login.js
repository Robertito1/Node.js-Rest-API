const router = require("express").Router();
const { tutorlogIn } = require("../controller/tutorauth");
const { studentlogIn } = require("../controller/studentauth");

router.get("/", (req, res) => {
  res.send("this is login");
});
router.post("/tutor", tutorlogIn);
router.post("/student", studentlogIn);

module.exports = router;
