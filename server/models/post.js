const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    date: Date,
    author: String,
    content: String
});

module.exports = mongoose.model('post', postSchema);