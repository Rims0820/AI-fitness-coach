const express = require("express");
const router = express.Router();
const Workout = require("../models/Workout");
const { protect } = require("../middleware/authMiddleware");


router.get("/", protect, async (req, res) => {
  const workouts = await Workout.find({ user: req.user._id });
  res.json(workouts);
});

router.post("/", protect, async (req, res) => {
  const { name, reps, sets, difficulty } = req.body;

  const workout = new Workout({
    user: req.user._id,
    name,
    reps,
    sets,
    difficulty,
  });

  await workout.save();
  res.json(workout);
});


router.delete("/:id", protect, async (req, res) => {
  await Workout.findByIdAndDelete(req.params.id);
  res.json({ message: "Workout deleted" });
});

module.exports = router;