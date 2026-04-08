const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  weight: Number,
  calories: Number,
  steps: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Progress", progressSchema);