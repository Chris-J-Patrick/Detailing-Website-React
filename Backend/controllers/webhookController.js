const User = require("../models/User");
const Reward = require("../models/Reward");

const handleAcuityWebhook = async (req, res) => {
  const { firstName, lastName, email, phone, amountSpent, appointmentDate } =
    req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        name: `${firstName} ${lastName}`,
        email,
        phone,
        rewards: 0,
      });
      await user.save();
    }

    const points = Math.floor(amountSpent);

    const reward = new Reward({
      userId: user._id,
      points,
      description: `Appointment on ${appointmentDate}`,
    });
    await reward.save();

    user.rewards += points;
    await user.save();

    res.status(200).json({ message: "User and rewards updated successfully" });
  } catch (err) {
    console.error("Error handling Acuity webhook:", err);
    res.status(500).json({ message: "Error handling webhook" });
  }
};

module.exports = { handleAcuityWebhook };
