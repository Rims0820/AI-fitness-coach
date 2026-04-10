const express = require("express");
const router = express.Router();
const Diet = require("../models/Diet");
const { protect } = require("../middleware/authMiddleware");

// Get diet
router.get("/", protect, async (req, res) => {
  const diet = await Diet.find({ user: req.user._id });
  res.json(diet);
});


router.post("/", protect, async (req, res) => {
  const { name, calories, protein, carbs } = req.body;

  const meal = new Diet({
    user: req.user._id,
    name,
    calories,
    protein,
    carbs,
  });

  await meal.save();
  res.json(meal);
});


router.delete("/:id", protect, async (req, res) => {
  await Diet.findByIdAndDelete(req.params.id);
  res.json({ message: "Diet deleted" });
});

module.exports = router;