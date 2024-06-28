

const mongoose = require("mongoose");
const askaquestion   = new mongoose.Schema({
    tittle: {
      type: String,
      require: true,
      trim: true,
    },
    description: {
      type: String,
      require: true,
      trim: true,
    },
    topic: {
      type: String,
      require: true,
    },
  });
  
  module.exports = mongoose.model("askaquestionUser", askaquestion);