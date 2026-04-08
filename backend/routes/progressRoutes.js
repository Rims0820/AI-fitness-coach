const express = require("express");
const router = express.Router();
const Progress = require("../models/Progress");
const auth = require("../middleware/auth");

// Add progress
router.post("/", auth, async (req, res) => {
  const progress = new Progress({
    user: req.user,
    weight: req.body.weight,
    calories: req.body.calories,
    steps: req.body.steps,
  });

  await progress.save();
  res.json(progress);
});

// Get progress
router.get("/", auth, async (req, res) => {
  const progress = await Progress.find({ user: req.user });
  res.json(progress);
});

module.exports = router;