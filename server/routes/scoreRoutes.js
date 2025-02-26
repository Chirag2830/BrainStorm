const express = require("express");
const { saveScore, getTopScores } = require("../controllers/scoreController");

const router = express.Router();

router.post("/score", saveScore);
router.get("/top-scores", getTopScores);

module.exports = router;
