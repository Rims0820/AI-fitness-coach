const express = require("express");
const router = express.Router();
const Workout = require("../models/Workout");
const auth = require("../middleware/auth");


router.get("/", auth, async (req, res) => {
  const workouts = await Workout.find({ user: req.user });
  res.json(workouts);
});

router.post("/", auth, async (req, res) => {
  const { name, reps, sets, difficulty } = req.body;

  const workout = new Workout({
    user: req.user,
    name,
    reps,
    sets,
    difficulty,
  });

  await workout.save();
  res.json(workout);
});


router.delete("/:id", auth, async (req, res) => {
  await Workout.findByIdAndDelete(req.params.id);
  res.json({ message: "Workout deleted" });
});

module.exports = router;