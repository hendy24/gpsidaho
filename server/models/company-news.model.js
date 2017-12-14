var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var companyNewsSchema = new Schema({
    _id: String,
    title: { type: String, required: true },
    date: { type: Date, default: Date.now },
    image: String,
    content: { type: String, required: true },
    author: String,
    dateModified: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CompanyNews', companyNewsSchema);