const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const db = "mongodb://gps:AqBA2}MMVNiB8k6k@ds255715.mlab.com:55715/gpsidaho-dev";
mongoose.Promise = global.Promise;

var promise = mongoose.connect(db, {
    useMongoClient: true
});

// Send requests to the proper controller
router.use('/posts', require('../controllers/posts.js'));
router.use('/team-members', require('../controllers/team-members.js'));


module.exports = router;
