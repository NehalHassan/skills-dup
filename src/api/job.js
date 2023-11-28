const express = require("express");
const axios = require("axios");

// const mockedData = require("../utils/data");
const helpers = require("../helpers");

const router = express.Router();
// const { data } = mockedData;

// router.get("/:id", (req, res) => {
//   const { id } = req.params;
//   const job = data.jobs.find((job) => job.id === id);

//   if (job) return res.status(200).json({ data: { job } });
//   return res.status(404).json({ error: { message: "Not found" } });
// });

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const jobs = await axios.get(
    "https://wuzzuf.net/api/job?filter%5Bcompany%5D=15061&filter%5Bstatus%5D=active"
  );

  const job = jobs.data.data.filter((job) => job.id === id);

  if (job) return res.status(200).json({ data: job[0] });

  return res.status(404).json({ error: { message: "Not found" } });
});

router.post("/:id/apply", (req, res) => {
  const application = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    email: req.body.email,
    bio: req.body.bio,
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
  const isValidPhone = helpers.validateEmail(application.phone);

  if (!isValidEmail && isValidPhone) {
    return res.status(400).json({ error: { message: "invalid email" } });
  }

  if (!isValidPhone && isValidEmail) {
    return res.status(400).json({ error: { message: "invalid phone" } });
  }

  if (!isValidPhone && !isValidEmail) {
    return res
      .status(400)
      .json({ error: { message: "invalid email and phone" } });
  }

  res.send("applied successfully");
});

module.exports = router;
