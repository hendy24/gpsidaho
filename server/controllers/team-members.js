const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const teamMember = require('../models/team-member');
const dateformat = require('dateformat');

router.get('/', function(req, res) {
    teamMember.find({})
        .exec(function (err, teamMembers) {
            if (err) {
                console.log('Error getting team members');
            } else {
                res.json(teamMembers)
            }
        })
});

module.exports = router;
