const express = require("express");
const router = express.Router();
const {
  createDiet,
  getDiets,
  deleteDiet,
} = require("../controllers/dietController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, createDiet);
router.get("/", protect, getDiets);
router.delete("/:id", protect, deleteDiet);

module.exports = router;