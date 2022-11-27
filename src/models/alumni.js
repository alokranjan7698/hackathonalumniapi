const mongoose = require("mongoose");
const validator = require("validator");

const alumniSchema = mongoose.Schema({
  name: {
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
  currentStatus: {
    type: String,
    required: true,
  },
  referrals: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
});

const Alumni = mongoose.model("Alumni", alumniSchema);

module.exports = Alumni;
