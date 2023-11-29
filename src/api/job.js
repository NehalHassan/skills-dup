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

// router.post("/:id/apply", (req, res) => {
//   const { body } = req;
//   const { firstName, lastName, phone, email, bio } = body;
//   console.log(body);
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   // another common pattern
//   res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET,OPTIONS,PATCH,DELETE,POST,PUT"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
//   );
//   res.setHeader("Content-Type", "application/json");
//   res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
//   if (req.method === "OPTIONS") {
//     res.status(200).end();
//     return;
//   }
//   const missingFields = helpers.getMissingFields({
//     firstName,
//     lastName,
//     phone,
//     email,
//     bio,
//   });

//   if (missingFields.length > 0) {
//     return res.status(400).json({
//       error: {
//         message: `${missingFields.join(",")} ${
//           missingFields.length > 1 ? "fields are" : "field is"
//         } required`,
//       },
//     });
//   }

//   const isValidEmail = helpers.validateEmail(email);
//   const isValidPhone = helpers.validatePhone(phone);

//   if (!isValidEmail && isValidPhone) {
//     return res.status(400).json({ error: { message: "invalid email" } });
//   }

//   if (!isValidPhone && isValidEmail) {
//     return res.status(400).json({ error: { message: "invalid phone" } });
//   }

//   if (!isValidPhone && !isValidEmail) {
//     return res
//       .status(400)
//       .json({ error: { message: "invalid email and phone" } });
//   }
//   return res.status(200).json({
//     success: true,
//     message: "Application submitted successfully.",
//     data: {
//       firstName,
//       lastName,
//       phone,
//       email,
//       bio,
//     },
//   });
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

// // POST endpoint
router.post("/:id/apply", (req, res) => {
  // Access JSON data from the request body
  const { firstName, lastName, phone, email, bio } = req.body;

  // Your logic to handle the POST request...

  // Send a response
  res.status(200).json({
    success: true,
    message: "Application submitted successfully.",
  });
});

module.exports = router;
