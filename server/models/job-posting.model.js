const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobPostingSchema = new Schema({
    title: { type: String, required: true },
    requirements: String,
    salary: String,
    description: { type: String, required: true },
    date: {type: Date, default: Date.now },
    userId: Number
});

module.exports = mongoose.model('jobPosting', jobPostingSchema);