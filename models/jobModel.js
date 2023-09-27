const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A Job Must Have A Title"],
  },
  companyName: {
    type: String,
    required: [true, "Hiring company name required"],
  },
  position: {
    type: String,
    enum: ["Fulltime", "Parttime", "Internship", "Freelance", "Contractual"],
    required: [true, "Job position required"],
  },
  photo: String,
  location: {
    type: String,
  },
  description: {
    type: String,
    required: [true, "A job must have a description"],
  },
  requirements: {
    content: String,
    items: [String], // Define the type of items as String
  },
  jobResponsibilities: {
    content: String,
    items: [String],
  },
  salary: {
    type: Number,
  },
  applicationDeadline: {
    type: String,
    required: [true, "A job must have a deadline"],
  },
  experienceLevel: {
    type: String,
    enum: ["Junior", "Mid-Level", "Senior"],
    required: [true, "A job must have an experience level"],
  },
  logobg: {
    type: String
  },
  isRemote: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    get: function (date) {
      return date.toISOString().split("T")[0];
    },
  },
});

jobSchema.index({ title: 1, companyName: 1 }, { unique: true });

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
