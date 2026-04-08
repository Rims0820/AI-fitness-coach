const mongoose = require("mongoose");

const dietSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: String,
  calories: Number,
  protein: Number,
  carbs: Number,
});

module.exports = mongoose.model("Diet", dietSchema);