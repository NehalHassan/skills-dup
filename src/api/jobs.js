const express = require("express");

const mockedData = require("../data");

const router = express.Router();
const { data } = mockedData;

router.get("/", (req, res) => {
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

router.get("/search", (req, res) => {
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

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const job = data.jobs.find((job) => job.id === id);

  if (job) return res.status(200).json({ data: { job } });
  return res.status(404).json({ error: { message: "Not found" } });
});

module.exports = router;
