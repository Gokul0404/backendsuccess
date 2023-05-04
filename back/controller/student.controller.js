const Student = require("../modal/student.modal");

exports.createStudentData = async (req, res) => {
  try {
    const student = new Student({ ...req.body });
    await student.save();
    return res.status(200).send({ message: "success" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "failed" });
  }
};
exports.getStudentData = async (req, res) => {
  try {
    const result = await Student.find();
    return res.status(200).send({ data: result });
  } catch (err) {
    return res.status(500).send({ message: "failed" });
  }
};
exports.getOnestudent = async (req, res) => {
  const { id } = req.params;
  try {
    const one = await Student.findById(id);
    return res.status(200).json(one);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "failed" });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete({ _id: req.params.id });
    return res.status(200).send({ message: "okay" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "failed" });
  }
};

exports.upadateStudent = async (req, res) => {
  console.log(req.body);
  const { id, data } = req.body;
  try {
    const va = await Student.findByIdAndUpdate({ _id: id }, data);
    return res.status(200).send(va);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "failed" });
  }
};
// module.exports = {
//   createStudentData,
//   getStudentData,
//   deleteStudent,
//   upadateStudent,
//   getOnestudent,
// };
