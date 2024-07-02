const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const userRoutes = require("./routes/userRoutes");
const rewardRoutes = require("./routes/rewardRoutes");
const webhookRoutes = require("./routes/webhookRoutes");

app.use("/api/users", userRoutes);
app.use("/api/rewards", rewardRoutes);
app.use("/api/webhooks", webhookRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
