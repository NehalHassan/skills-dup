const express = require("express");
const mockedData = require("../utils/data");

const router = express.Router();
const { data } = mockedData;

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const skill = data.skills.find((skill) => skill.id === id);

  if (skill) return res.status(200).json({ data: { skill } });
  return res.status(404).json({ error: { message: "Not found" } });
});

module.exports = router;
