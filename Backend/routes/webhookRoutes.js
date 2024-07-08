// routes/webhookRoutes.js
const express = require("express");
const { handleAcuityWebhook } = require("../controllers/webhookController");

const router = express.Router();

router.post("/", handleAcuityWebhook);

module.exports = router;
