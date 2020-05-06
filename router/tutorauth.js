const router = require("express").Router();
const { tutorsignUp, tutorlogIn } = require("../controller/tutorauth");

router.get("/", (req, res) => {
  res.send("This is the express app .you have now entered express");
});
router.post("/signup", tutorsignUp);
router.post("/login/tutor", tutorlogIn);

module.exports = router;
