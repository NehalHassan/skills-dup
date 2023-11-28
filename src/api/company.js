const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/:id", async (req, res) => {
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
          description: company.data.data.attributes.description,
          name: company.data.data.attributes.name,
          perks: company.data.data.attributes.perks,
          website: company.data.data.attributes.website,
        },
      },
    });

  return res.status(404).json({ error: { message: "Not found" } });
});

router.get("/:id/jobs", async (req, res) => {
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

module.exports = router;
