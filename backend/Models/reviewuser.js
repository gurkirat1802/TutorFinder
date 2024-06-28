const mongoose = require("mongoose");
const reviews  = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  tutorName: {
    type: String,
    required: true,
    trim: true,
  },
  tutorPhone: {
    type: String,
    trim: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
    },
  });
  
  module.exports = mongoose.model("reviewUser", reviews);