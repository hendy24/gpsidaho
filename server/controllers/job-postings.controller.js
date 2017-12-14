var appModel = require('../models/app.model');
var jobPosting = require('../models/job-posting.model');

// fetch all available jobs
exports.fetchJobs = function (req, res, next) {
    appModel.fetchAll(jobPosting).then(function (result) {
        res.send(result);
    });
}

// fetch a single job 
exports.fetchJob = function (req, res, next) {
    var id = req.params.id;
    appModel.fetchOne(jobPosting, id).then(function (result) {
        res.send(result);
    });
}

// add a new job posting
exports.addJobPosting = function (req, res, next) {
    var jobData = {
        title: req.body.title,
        requirements: req.body.requirements,
        salary: req.body.salary,
        description: req.body.description
    }

    appModel.add(jobPosting, jobData)
        .then(function(result) {
            console.log('Update Successful');
            res.send(result);
        });
}

// update an existing job posting
exports.updateJobPosting = function (req, res, next) {
    var jobData = {
        _id: req.params.id,
        title: req.body.title,
        requirements: req.body.requirements,
        salary: req.body.salary,
        description: req.body.description
    }

    appModel.update(jobPosting, jobData)
        .then(function(result) {
            res.send(result);
        });
}

// delete a job posting
exports.deleteJobPosting = function (req, res, next) {
    var id = req.params.id;
    appModel.delete(jobPosting, id).then(function (result) {
        res.send(result);
    });
}

