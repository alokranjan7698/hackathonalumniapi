const Alumni = require("../models/alumni");

const addAlumni = async (req, res) => {
  const { name, email, currentStatus, referrals, description } = req.body;
  if (!name || !email || !currentStatus || !referrals || !description) {
    res.status(400).json("Please enter all details");
  }
  try {
    const newAlumni = await Alumni.create({
      name,
      email,
      currentStatus,
      referrals,
      description,
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
  const { name, email, currentStatus, referrals, description } = req.body;
  if (id) {
    try {
      const updatedAlumni = await Alumni.findByIdAndUpdate(
        { _id: id },
        { name, email, currentStatus, referrals, description },
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

module.exports = { addAlumni, deleteAlumni, editAlumni, readAlumni };
