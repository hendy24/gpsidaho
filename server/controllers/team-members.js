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

router.post('/', function (req, res) {
    var newTeamMember = new teamMember();
    newTeamMember.name = req.body.name;
    newTeamMember.title = req.body.title;
    newTeamMember.bio = req.body.bio;
    if (newTeamMember.name) {
        newTeamMember.save(function(err, data) {
            if (err) {
                console.log('Error adding new team member info');
            } else {
                res.json(data);
            }
        })
    } else {
        res.json('Please enter the new team member info');
    }
})

module.exports = router;
