const mongoose = require("mongoose");
const validator = require("validator");

const alumniSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  pic: {
    type: String,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => {
        if (!validator.isEmail(email)) {
          throw new Error("Email is not valid");
        }
      },
    },
  },
  mobile: [
    {
      type: String,
    },
  ],
  institution: {
    type: String,
    required: true,
  },
  batch: {
    type: Number,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  currentPosition: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const Alumni = mongoose.model("Alumni", alumniSchema);

module.exports = Alumni;
