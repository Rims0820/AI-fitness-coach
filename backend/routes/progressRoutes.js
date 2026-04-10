const express = require("express");
const router = express.Router();
const Progress = require("../models/Progress");
const { protect } = require("../middleware/authMiddleware");

// Add progress
router.post("/", protect, async (req, res) => {
  const progress = new Progress({
    user: req.user._id,
    weight: req.body.weight,
    calories: req.body.calories,
    steps: req.body.steps,
  });

  await progress.save();
  res.json(progress);
});

// Get progress
router.get("/", protect, async (req, res) => {
  const progress = await Progress.find({ user: req.user._id });
  res.json(progress);
});

module.exports = router;