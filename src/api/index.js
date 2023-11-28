const express = require("express");

const router = express.Router();

const company = require("./company");
const job = require("./job");
const jobs = require("./jobs");
const skill = require("./skill");
const talents = require("./talents");

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/company", company);
router.use("/job", job);
router.use("/skill", skill);
router.use("/talents", talents);
router.use("/jobs", jobs);

module.exports = router;
