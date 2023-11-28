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
          logoUrl: company.data.data.links.defaultLogoUrl,
          coverUrl: company.data.data.links.coverUrl,
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
    const mappedJobs = jobs.data.data.map((job, index) => ({
      type: "job",
      id: job.id,
      attributes: {
        title: job.attributes.title,
        description: job.attributes.description,
        requirements: job.attributes.requirements,
        workType: job.attributes.workTypes,
        skills: job.attributes.keywords,
        category: job.attributes.workRoles[0].name,
        workingMethodology: index % 2 ? "hybrid" : "remote",
        benefits: [
          {
            id: 1,
            name: "medical insurance",
          },
          {
            id: 2,
            name: "social insurance",
          },
          {
            id: 3,
            name: "childcare facility",
          },
          {
            id: 8,
            name: "work from home",
          },
          {
            id: 6,
            name: "maternity leave",
          },
          {
            id: 7,
            name: "flexible hours",
          },
        ],
      },
    }));

    return res.status(200).json(mappedJobs);
  }
  return res.status(404).json({ error: { message: "Not found" } });
});

module.exports = router;
