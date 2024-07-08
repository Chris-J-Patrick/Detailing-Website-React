// controllers/webhookController.js
const User = require("../models/User");

const handleAcuityWebhook = async (req, res) => {
  const { firstname, lastname, email, phone, amountspent, appointmentDate } =
    req.body;

  try {
    const validAmountSpent = parseFloat(amountspent);
    if (isNaN(validAmountSpent)) {
      throw new Error("Invalid amountSpent value");
    }

    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        name: `${firstname} ${lastname}`,
        email,
        phone,
        rewardsPoints: 0,
      });
      await user.save();
    }

    const points = Math.floor(validAmountSpent);
    user.rewardsPoints += points;
    await user.save();

    res.status(200).json({
      message: `User ${firstname} ${lastname} and rewards ${validAmountSpent} updated successfully`,
    });
  } catch (err) {
    console.error("Error handling Acuity webhook:", err);
    res.status(500).json({ message: "Error handling webhook" });
  }
};

module.exports = { handleAcuityWebhook };
