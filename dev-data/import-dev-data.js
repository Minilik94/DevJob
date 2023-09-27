const fs = require("fs");
const mongoose = require("mongoose");
const Job = require("../models/jobModel"); // Import the Job model
const dotenv = require("dotenv").config({ path: "../config.env" });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection successful!"))
  .catch((err) => console.error(err));

// Read and parse the JSON file
const jobs = JSON.parse(fs.readFileSync(`${__dirname}/jobs.json`, "utf-8"));

const importData = async () => {
  try {
    // Create job documents using the Job model
    await Job.create(jobs); // Assuming 'jobs' is an array of job objects
    console.log('Data successfully loaded');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

const deleteData = async () => {
  try {
    // Delete all job documents
    await Job.deleteMany();
    console.log('Data successfully deleted');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
