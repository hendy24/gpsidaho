var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

var UserSchema = new Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true },
    username: { type: String, required: true, index: { unique: true} },
    password: { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);