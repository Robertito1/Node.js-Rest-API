const router = require("express").Router();
const { tutorsignUp } = require("../controller/tutorauth");
const { studentsignUp } = require("../controller/studentauth");

router.post("/tutor", tutorsignUp);
router.post("/student", studentsignUp);

module.exports = router;
