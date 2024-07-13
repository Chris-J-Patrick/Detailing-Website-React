const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Auth0Id: { type: String, required: false },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: false },
  rewardsPoints: { type: Number, default: 0 },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
