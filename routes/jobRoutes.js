const express = require("express");
const router = express.Router();
const jobController = require("../controller/jobController");

router.route("/").get(jobController.getAllJobs);
router.route("/:id").get(jobController.getJob).patch(jobController.updateJob);
router.route("/createJobs").post(jobController.createJob);

module.exports = router;
