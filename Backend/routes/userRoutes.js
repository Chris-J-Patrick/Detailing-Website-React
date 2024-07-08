const express = require("express");
const {
  getUsers,
  addUser,
  getRewardsById,
  addRewardsById,
  getUserByEmail,
  getUserIdByEmail,
  getUserRewardsByEmail,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", getUsers);
router.post("/", addUser);
router.get("/:id/rewards", getRewardsById);
router.get("/:email/rewards/email", getUserRewardsByEmail);
router.post("/:id/rewards", addRewardsById);
router.get("/email", getUserByEmail);
router.get("/id", getUserIdByEmail);

module.exports = router;
