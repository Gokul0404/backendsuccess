const router = require("express").Router();
const {
  createStudentData,
  getStudentData,
  deleteStudent,
  upadateStudent,
  getOnestudent,
} = require("../controller/student.controller");

router.post("/create", createStudentData);
router.get("/getStudents", getStudentData);
router.get("/getoneStudents/:id", getOnestudent);
router.delete("/deleteStudent/:id", deleteStudent);
router.put("/update", upadateStudent);

module.exports = router;
