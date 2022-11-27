const {
  addStudent,
  editStudent,
  deleteStudent,
  readStudent,
  searchStudent,
} = require("../controllers/studentController");

const studentRouter = require("express").Router();

studentRouter.post("/add", addStudent);
studentRouter.put("/edit/:id", editStudent);
studentRouter.delete("/delete/:id", deleteStudent);
studentRouter.get("/read", readStudent);
studentRouter.get("/", searchStudent);

module.exports = studentRouter;
