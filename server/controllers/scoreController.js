const Score = require("../models/Score");

// Save user score
exports.saveScore = async (req, res) => {
  try {
    const { username, score } = req.body;
    const newScore = new Score({ username, score });
    await newScore.save();
    res.status(201).json({ message: "Score saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error saving score", error });
  }
};

// Fetch top scores
exports.getTopScores = async (req, res) => {
  try {
    const scores = await Score.find().sort({ score: -1 }).limit(10);
    res.status(200).json(scores);
  } catch (error) {
    res.status(500).json({ message: "Error fetching scores", error });
  }
};
