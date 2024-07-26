const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const User = require("../models/User");

const handleAcuityWebhook = async (req, res) => {
  const { id } = req.body;

  const acuityUserId = process.env.ACUITY_USER_ID;
  const acuityApiKey = process.env.ACUITY_API_KEY;

  const acuityAppointmentUrl = `https://acuityscheduling.com/api/v1/appointments/${id}`;

  try {
    const appointmentResponse = await fetch(acuityAppointmentUrl, {
      method: "GET",
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${acuityUserId}:${acuityApiKey}`
        ).toString("base64")}`,
        Accept: "application/json",
      },
    });

    if (!appointmentResponse.ok) {
      throw new Error(
        `Failed to fetch appointment: ${appointmentResponse.status} ${appointmentResponse.statusText}`
      );
    }

    const appointment = await appointmentResponse.json();

    const { firstName, lastName, email, phone, price } = appointment;

    const validAmountSpent = parseFloat(price);
    if (isNaN(validAmountSpent)) {
      throw new Error("Invalid price value");
    }

    let user = await User.findOne({ email });
    if (!user) {
      user = new User({
        name: `${firstName} ${lastName}`,
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
      message: `User ${firstName} ${lastName} and rewards points updated successfully`,
    });
  } catch (err) {
    console.error("Error handling Acuity webhook:", err);
    res.status(500).json({ message: "Error handling webhook: " + err.message });
  }
};

module.exports = { handleAcuityWebhook };
