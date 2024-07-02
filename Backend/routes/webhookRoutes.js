const express = require("express");
const { handleAcuityWebhook } = require("../controllers/webhookController");
const router = express.Router();

router.post("/acuity", handleAcuityWebhook);

module.exports = router;
