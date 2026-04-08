const express = require("express");
const router = express.Router();
const Diet = require("../models/Diet");
const auth = require("../middleware/auth");

// Get diet
router.get("/", auth, async (req, res) => {
  const diet = await Diet.find({ user: req.user });
  res.json(diet);
});


router.post("/", auth, async (req, res) => {
  const { name, calories, protein, carbs } = req.body;

  const meal = new Diet({
    user: req.user,
    name,
    calories,
    protein,
    carbs,
  });

  await meal.save();
  res.json(meal);
});


router.delete("/:id", auth, async (req, res) => {
  await Diet.findByIdAndDelete(req.params.id);
  res.json({ message: "Diet deleted" });
});

module.exports = router;