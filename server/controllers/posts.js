const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const post = require('../models/post');
// const dateformat = require('dateformat');


router.get('/', function (req, res) {
    console.log('Requesting all posts');
    post.find({})
        .exec(function (err, posts) {
            if (err) {
                console.log('Error getting the posts');
            } else {
                res.json(posts);
            }
        })
});

router.post('/add-post', function (req, res) {
    var newPost = new post();
    console.log(req.body);
    newPost.title = req.body.title;
    newPost.author = req.body.author;
    newPost.content = req.body.content;
    if (newPost.title) {
        newPost.save(function (err, addedPost) {
            if (err) {
                console.log('There was an error adding the new post');
            } else {
                console.log('Save the new blog post');
                res.json(addedPost);
            }
        })
    } else {
        res.json('Please enter information to save for the new post');
    }
});

module.exports = router;
