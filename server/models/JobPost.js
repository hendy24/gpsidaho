const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobPostSchema = new Schema({
    title: String,
    description: String,
    date: {type: Date, default: Date.now },
    userId: Number
});

module.exports = mongoose.model('jobPost', jobPostSchema);