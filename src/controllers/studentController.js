const Student = require("../models/student");

const addStudent = async (req, res) => {
  const {
    name,
    gender,
    email,
    mobile,
    institution,
    qualification,
    batch,
    branch,
    regno,
  } = req.body;
  if (
    !name ||
    !gender ||
    !email ||
    !mobile ||
    !institution ||
    !qualification ||
    !batch ||
    !branch ||
    !regno
  ) {
    res.status(400).json("Please enter all details");
  }
  try {
    const newStudent = await Student.create({
      name,
      gender,
      email,
      mobile,
      institution,
      qualification,
      batch,
      branch,
      regno,
    });
    res.status(200).json(newStudent);
  } catch (err) {
    res.status(400).json("Error in adding student\n" + err.message);
  }
};
const deleteStudent = async (req, res) => {
  const { id } = req.params;
  if (id) {
    try {
      const deletedStudent = await Student.findByIdAndDelete({ _id: id });
      res.status(200).json(deletedStudent);
    } catch (err) {
      res.status(400).json("Error in deleting student\n" + err.message);
    }
  } else {
    res.status(400).json("Please enter id");
  }
};
const editStudent = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    gender,
    email,
    mobile,
    institution,
    qualification,
    batch,
    branch,
    regno,
  } = req.body;
  if (id) {
    try {
      const updatedStudent = await Student.findByIdAndUpdate(
        { _id: id },
        {
          name,
          gender,
          email,
          mobile,
          institution,
          qualification,
          batch,
          branch,
          regno,
        },
        { new: true }
      );
      res.status(200).json(updatedStudent);
    } catch (err) {
      res.status(400).json("Error in updating student\n" + err.message);
    }
  } else {
    res.status(400).json("Please enter id");
  }
};
const readStudent = async (req, res) => {
  try {
    const students = await Student.find({});
    res.status(200).json(students);
  } catch (err) {
    res.status(400).json("Error in fetching student\n" + err.message);
  }
};
const searchStudent = async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};
  try {
    const students = await Student.find(keyword);
    res.status(200).json(students);
  } catch (err) {
    res.status(400).json("Error in searching alumni\n" + err.message);
  }
};

module.exports = {
  addStudent,
  deleteStudent,
  editStudent,
  readStudent,
  searchStudent,
};
