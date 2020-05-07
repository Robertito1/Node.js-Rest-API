const router = require("express").Router();
const { tutorsignUp, tutorlogIn } = require("../controller/tutorauth");
const { studentsignUp, studentlogIn } = require("../controller/studentauth");
const { createCategory } = require("../controller/categorie");
const verifyToken = require("../middleware");

router.get("/", (req, res) => {
  res.send("This is the express app .you have now entered express");
});
router.post("/tutor", tutorsignUp);
router.post("/tutor", tutorlogIn);
router.post("/student", studentsignUp);
router.post("/student", studentlogIn);
router.post("/category", verifyToken, (req, res) => {
  jwt.verify(req.token, "somesecretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({ message: "done", authData });
    }
  });
});
module.exports = router;
