const mongoose = require("mongoose")
const becomeatutor = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: Number,
    required: true,

  },
  qualification: {
    type: String,
    required: true,
    trim: true,
  },
  subject: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  // photo:
  // {
  //   type: Buffer,
  //   required: true,
  // }
})

module.exports = mongoose.model("becomeatutor", becomeatutor);