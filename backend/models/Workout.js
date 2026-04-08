const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: String,
  reps: Number,
  sets: Number,
  difficulty: String,
});

module.exports = mongoose.model("Workout", workoutSchema);