const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamMemberSchema = new Schema({
    name: String,
    title: String,
    bio: String
});

module.exports = mongoose.model('team', teamMemberSchema);