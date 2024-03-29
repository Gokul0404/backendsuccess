const mongoose = require("mongoose");

// modal
const student = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
   
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: "Email address is required",

      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
 
  },
});

module.exports = mongoose.model("student", student);
