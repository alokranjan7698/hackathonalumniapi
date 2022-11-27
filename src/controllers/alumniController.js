const Alumni = require("../models/alumni");

const addAlumni = async (req, res) => {
  const {
    name,
    pic,
    gender,
    email,
    mobile,
    institution,
    batch,
    branch,
    currentPosition,
    location,
  } = req.body;
  if (
    !name ||
    !gender ||
    !email ||
    !mobile ||
    !institution ||
    !batch ||
    !branch ||
    !currentPosition ||
    !location
  ) {
    res.status(400).json("Please enter all details");
  }
  try {
    const newAlumni = await Alumni.create({
      name,
      pic,
      gender,
      email,
      mobile,
      institution,
      batch,
      branch,
      currentPosition,
      location,
    });
    res.status(200).json(newAlumni);
  } catch (err) {
    res.status(400).json("Error in adding Alumni\n" + err.message);
  }
};
const deleteAlumni = async (req, res) => {
  const { id } = req.params;
  if (id) {
    try {
      const deletedAlumni = await Alumni.findByIdAndDelete({ _id: id });
      res.status(200).json(deletedAlumni);
    } catch (err) {
      res.status(400).json("Error in deleting alumni\n" + err.message);
    }
  } else {
    res.status(400).json("Please enter id");
  }
};
const editAlumni = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    pic,
    gender,
    email,
    mobile,
    institution,
    batch,
    branch,
    currentPosition,
    location,
  } = req.body;
  if (id) {
    try {
      const updatedAlumni = await Alumni.findByIdAndUpdate(
        { _id: id },
        {
          name,
          pic,
          gender,
          email,
          mobile,
          institution,
          batch,
          branch,
          currentPosition,
          location,
        },
        { new: true }
      );
      res.status(200).json(updatedAlumni);
    } catch (err) {
      res.status(400).json("Error in updating alumni\n" + err.message);
    }
  } else {
    res.status(400).json("Please enter email");
  }
};
const readAlumni = async (req, res) => {
  try {
    const alumni = await Alumni.find({}, { __v: 0 });
    res.status(200).json(alumni);
  } catch (err) {
    res.status(400).json("Error in fetching student\n" + err.message);
  }
};
const searchAlumni = async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};
  try {
    const alumni = await Alumni.find(keyword);
    res.status(200).json(alumni);
  } catch (err) {
    res.status(400).json("Error in searching alumni\n" + err.message);
  }
};

module.exports = {
  addAlumni,
  deleteAlumni,
  editAlumni,
  readAlumni,
  searchAlumni,
};
