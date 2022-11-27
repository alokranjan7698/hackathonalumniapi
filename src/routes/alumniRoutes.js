const {
  addAlumni,
  editAlumni,
  deleteAlumni,
  readAlumni,
} = require("../controllers/alumniController");

const alumniRouter = require("express").Router();

alumniRouter.post("/", addAlumni);
alumniRouter.put("/:id", editAlumni);
alumniRouter.delete("/:id", deleteAlumni);
alumniRouter.get("/", readAlumni);

module.exports = alumniRouter;
