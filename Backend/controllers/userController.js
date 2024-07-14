const User = require("../models/User");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUserByEmail = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.query.email });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res
      .status(500)
      .json({ message: err.message + " could not find user by email" });
  }
};

const getUserIdByEmail = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.query.email });
    if (!user) return res.status(404).json({ message: "User not found" });
    const _id = user._id;
    res.json({ _id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getUserRewardsByEmail = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) return res.status(404).json({ message: "User not found" });
    const userRewards = user.rewardsPoints;
    res.json({ rewardsPoints: userRewards });
  } catch (err) {
    res
      .status(500)
      .json({ message: err.message + " could not find user rewards by email" });
  }
};
const addUser = async (req, res) => {
  const user = new User({
    Auth0Id: req.body.Auth0Id,
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    rewardsPoints: 0,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getRewardsById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ rewardsPoints: user.rewardsPoints });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addRewardsById = async (req, res) => {
  const { points } = req.body;
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.rewardsPoints += points;
    await user.save();

    res.json({ rewardsPoints: user.rewardsPoints });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getUsers,
  addUser,
  getRewardsById,
  addRewardsById,
  getUserByEmail,
  getUserIdByEmail,
  getUserRewardsByEmail,
};
