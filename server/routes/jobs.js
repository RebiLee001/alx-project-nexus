const express = require("express");
const jobs = require("../data/jobs");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(jobs);
});

router.get("/:id", (req, res) => {
  const job = jobs.find((j) => j.id === req.params.id);
  if (!job) {
    return res.status(404).json({ message: "Job not found" });
  }
  res.json(job);
});

module.exports = router;
