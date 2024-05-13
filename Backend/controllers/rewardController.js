const Reward = require("../models/Reward");
const User = require("../models/User");

const getRewards = async (req, res) => {
  try {
    const rewards = await Reward.find({ userId: req.user.sub });
    res.json(rewards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addReward = async (req, res) => {
  const { points, description } = req.body;
  try {
    const reward = new Reward({
      userId: req.user.sub,
      points,
      description,
    });
    await reward.save();

    const user = await User.findById(req.user.sub);
    user.rewards += points;
    await user.save();

    res.status(201).json(reward);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const redeemReward = async (req, res) => {
  const { rewardId } = req.body;
  try {
    const reward = await Reward.findById(rewardId);
    if (!reward) {
      return res.status(404).json({ message: "Reward not found" });
    }

    const user = await User.findById(reward.userId);
    if (user.rewards < reward.points) {
      return res.status(400).json({ message: "Insufficient rewards points" });
    }

    user.rewards -= reward.points;
    await user.save();

    await Reward.findByIdAndDelete(rewardId);

    res.status(200).json({ message: "Reward redeemed successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getRewards, addReward, redeemReward };
