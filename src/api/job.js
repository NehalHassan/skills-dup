const express = require("express");
const axios = require("axios");

const mockedData = require("../data");
const helpers = require("../helpers");

const router = express.Router();
const { data } = mockedData;

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const job = data.jobs.find((job) => job.id === id);

  if (job) return res.status(200).json({ data: { job } });
  return res.status(404).json({ error: { message: "Not found" } });
});

router.post("/:id/apply", (req, res) => {
  const application = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    jobTitle: req.body.jobTitle,
    email: req.body.email,
  };

  const missingFields = helpers.getMissingFields(application);

  if (missingFields.length > 0) {
    return res.status(400).json({
      error: {
        message: `${missingFields.join(",")} ${
          missingFields.length > 1 ? "fields are" : "field is"
        } required`,
      },
    });
  }

  const isValidEmail = helpers.validateEmail(application.email);

  if (!isValidEmail) {
    return res.status(400).json({ error: { message: "invalid email" } });
  }

  res.send("applied successfully");
});

module.exports = router;
