const express = require("express");

const mockedData = require("../data");

const router = express.Router();
const { talents } = mockedData;

router.get("/", (_, res) => {
  console.log(talents.length);
  return res.status(200).json({ data: talents });
});

module.exports = router;
