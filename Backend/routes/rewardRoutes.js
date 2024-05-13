const express = require("express");
const {
  getRewards,
  addReward,
  redeemReward,
} = require("../controllers/rewardController");
const { expressjwt: jwt } = require("express-jwt");
const jwks = require("jwks-rsa");

const router = express.Router();

const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),
  audience: process.env.AUTH0_CLIENT_ID,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ["RS256"],
});

router.get("/", checkJwt, getRewards);
router.post("/", checkJwt, addReward);
router.post("/redeem", checkJwt, redeemReward);

module.exports = router;
