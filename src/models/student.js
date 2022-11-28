const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
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
      type:Number,
    },
  ],
  institution: {
    type: String,
    required: true,
  },
  qualification: {
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
  regno: {
    type:Number,
    required: true,
    unique: true,
  },
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
