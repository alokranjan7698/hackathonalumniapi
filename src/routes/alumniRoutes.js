const {
  addAlumni,
  editAlumni,
  deleteAlumni,
  readAlumni,
  searchAlumni,
} = require("../controllers/alumniController");

const alumniRouter = require("express").Router();

alumniRouter.post("/add", addAlumni);
alumniRouter.put("/edit/:id", editAlumni);
alumniRouter.delete("/delete/:id", deleteAlumni);
alumniRouter.get("/read", readAlumni);
alumniRouter.get("/", searchAlumni);

module.exports = alumniRouter;
