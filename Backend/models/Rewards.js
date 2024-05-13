const mongoose = require("mongoose");

const RewardSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  points: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Reward", RewardSchema);
