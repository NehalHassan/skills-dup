const express = require("express");
const cors = require("cors");
const axios = require("axios");

const mockedData = require("./data");
const helpers = require("./helpers");

const { data, talents } = mockedData;

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/jobs", (req, res) => {
  const cursor = Number(req.query.cursor) || 0;
  const limit = Number(req.query.limit) || 12;

  if (isNaN(cursor) || isNaN(limit)) {
    return res.status(400).json({ message: "invalid pagination values" });
  }

  const start = cursor;
  const end = cursor + limit;

  const jobs = data.jobs.slice(start, end);
  const count = data.jobs.length;
  const next = count > end ? { next: end } : {};

  return res.status(200).json({ data: { jobs, meta: { ...next, count } } });
});

app.get("/jobs/search", (req, res) => {
  const { query } = req.query;

  if (query) {
    const jobs = data.jobs.filter((x) =>
      x.attributes.title.toLowerCase().includes(query)
    );
    const count = jobs?.length;

    return res.status(200).json({ data: { jobs, meta: { count } } });
  }

  const jobs = data.jobs;
  const count = data.jobs.length;

  return res.status(200).json({ data: { jobs, meta: { count } } });
});

app.get("/job/:id", (req, res) => {
  const { id } = req.params;
  const job = data.jobs.find((job) => job.id === id);

  if (job) return res.status(200).json({ data: { job } });
  return res.status(404).json({ error: { message: "Not found" } });
});

app.get("/skill/:id", (req, res) => {
  const { id } = req.params;
  const skill = data.skills.find((skill) => skill.id === id);

  if (skill) return res.status(200).json({ data: { skill } });
  return res.status(404).json({ error: { message: "Not found" } });
});

app.get("/company/:id", async (req, res) => {
  const { id } = req.params;
  const company = await axios.get(
    `https://wuzzuf.net/api/company/${id}?include=size,type,city,country,workIndustries.workIndustry`
  );

  if (company)
    return res.status(200).json({
      data: {
        type: "company",
        id: id,
        attributes: {
          ...company.data.data.attributes,
          description: company.data.data.attributes.description,
          name: company.data.data.attributes.name,
          perks: company.data.data.attributes.perks,
          website: company.data.data.attributes.website,
        },
      },
    });

  return res.status(404).json({ error: { message: "Not found" } });
});

app.get("/talents", (_, res) => {
  console.log(talents.length);
  return res.status(200).json({ data: talents });
});

app.get("/company/:id/jobs", async (req, res) => {
  const { id } = req.params;
  const jobs = await axios.get(
    `https://wuzzuf.net/api/job?filter%5Bcompany%5D=${id}&filter%5Bstatus%5D=active`
  );

  if (jobs) {
    const mappedJobs = jobs.data.data.map((job) => ({
      type: "job",
      id: job.id,
      attributes: {
        title: job.attributes.title,
        description: job.attributes.description,
        requirements: job.attributes.requirements,
        workType: job.attributes.workTypes,
        keyWords: job.attributes.keywords,
        category: job.attributes.workRoles[0].name,
      },
    }));

    return res.status(200).json(mappedJobs);
  }
  return res.status(404).json({ error: { message: "Not found" } });
});

app.post("/job/:id/apply", (req, res) => {
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

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));

module.exports = app;
