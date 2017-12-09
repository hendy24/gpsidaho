const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jobPost = require('../models/job-post');

// Get all posts
router.get('/', function (req, res) {
    console.log('Requesting all job openings');
    post.find({})
        .exec(function (err, posts) {
            if (err) {
                console.log('Error getting the job openings');
            } else {
                res.json(posts);
            }
        })
});

// Get a single post by id
router.get('/:id', function (req, res) {
    post.findById(req.params.id)
        .exec(function (err, post) {
            if (err) {
                console.log('Error getting the job opening');
            } else {
                res.json(post);
            }
        })
});


// Add a new post
router.post('/add-job-opening', function (req, res) {
    var newPost = new jobPost();
    console.log(req.body);
    newPost.title = req.body.title;
    newPost.description = req.body.description;
    if (newPost.title) {
        newPost.save(function (err, addedPost) {
            if (err) {
                console.log('There was an error adding the new job opening');
            } else {
                console.log('Save the new job opening');
                res.json(addedPost);
            }
        })
    } else {
        res.json('Please enter information to save for the new job opening');
    }
});


module.exports = router;

