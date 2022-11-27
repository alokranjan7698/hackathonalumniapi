const {
  addStudent,
  editStudent,
  deleteStudent,
  readStudent,
} = require("../controllers/studentController");

const studentRouter = require("express").Router();

studentRouter.post("/", addStudent);
studentRouter.put("/:id", editStudent);
studentRouter.delete("/:id", deleteStudent);
studentRouter.get("/", readStudent);

module.exports = studentRouter;
