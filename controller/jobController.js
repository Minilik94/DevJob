const Job = require("../models/jobModel");

exports.getAllJobs = async (req, res, next) => {
  try {
    // console.log(req.query);
    // 1) Filtering
    const queryObj = { ...req.query };
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    // console.log(queryStr);
    // console.log(JSON.parse(queryStr));

    let query = Job.find(JSON.parse(queryStr));

    // 2) Sorting
    if (req.query.sort) {
      // console.log(req.query);
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
      // console.log(sortBy);
    } else {
      query = query.sort("-createdAt");
    }

    // 3) Fields
    if (req.query.fields) {
      // console.log(req.query);
      const fields = req.query.fields.split(",").join(" ");
      // console.log(fields);
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }

    // 4) Pagination
    const page = req.query.page * 1 || 1;
    const limit = req.query.page * 1 || 100;
    const skip = (page - 1) * limit;

    query = query.skip(skip).limit(limit);

    if (req.query.page) {
      const numPage = await Job.countDocuments();

      if (skip >= numPage) throw new Error("This page does not exist");
    }

    const jobs = await query;

    res.status(200).json({
      status: "success",
      result: jobs.length,
      data: {
        jobs,
      },
    });
  } catch (error) {
    // console.log(error);
    return res.status(404).json({
      status: "fail",
      message: `Something went wrong while getting all the jobs \n ${error.message}`,
    });
  }
};

exports.getJob = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.id);
    if(!job) {
      return res.status(404).json({
        status: "fail",
        message: `job not found`,
      });
    }
    res.status(200).json({
      status: "success",
      job,
    });
  } catch (error) {
    // console.log(error);
    return res.status(404).json({
      status: "fail",
      message: `Something went wrong while getting all the jobs \n ${error.message}`,
    });
  }
};

exports.createJob = async (req, res, next) => {
  try {
    const newJobs = await Job.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        newJobs,
      },
    });
  } catch (error) {
    // console.log(error);
    return res.status(404).json({
      status: "fail",
      message: `Something went wrong while creating a new job \n ${error.message}`,
    });
  }
};

exports.updateJob = async (req, res, next) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id,req.body, {
      runValidatior: true,
      new: true,
    })

    if(!updatedJob){
      return res.status(404).json({
        status: "fail",
        message: `Something went wrong, couldn't found job`,
      });
    }
  
    res.status(201).json({
      status: 'success',
      data: {
        updatedJob
      }
    })
  } catch (error) {
    // console.log(error);
    return res.status(404).json({
      status: "fail",
      message: `Something went wrong while creating a new job \n ${error.message}`,
    });
  }
}

