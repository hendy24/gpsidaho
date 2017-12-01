const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    date: { type: Date, default: Date.now },
    image: String,
    content: String,
    author: String,
    comments: [{ body: String, date: Date }] 
});

module.exports = mongoose.model('post', postSchema);