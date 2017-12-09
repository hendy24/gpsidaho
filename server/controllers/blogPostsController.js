var BlogPost = require('../models/BlogPost');
// var BlogPost = require('mongoose').model('BlogPost');


// Find the most recent blog posts
exports.fetchPosts = function(req, res, next) {
    BlogPost.find({})
        .exec(function (err, collection) {
            if (err) {
                console.log('Error getting the posts');
            } else {
                res.json(collection);
            }
        })
}

exports.fetchPost = function(req, res, next) {
    var id = req.params.id;
    BlogPost.findById(id)
        .exec(function(err, item) {
            if (err) {
                console.log('Could not find the post');
            } else {
                res.json(item);
            }
        });
}

// Add a new post
exports.addPost = function (req, res, next) {
    var post = new BlogPost();
    post.title = req.body.title;
    post.author = req.body.author;
    post.content = req.body.content;
    if (post.title) {
        post.save(function (err, newPost) {
            if (err) {
                console.log('There was an error adding the new post');
            } else {
                console.log('Save the new blog post');
                res.json(newPost);
            }
        })
    } else {
        res.json('Please enter information to save for the new post');
    }
}

exports.deletePost = function(req, res, next) {
    var id = req.params.id;
    BlogPost.findByIdAndRemove(id, function(err, item) {
        if (err) {
            console.log('Could not delete the post');
        } else {
            console.log('Successfully deleted the post');
            res.json(item);
        }
    });
};


// // Get a single post by id
// router.get('/:id', function (req, res) {
//     Post.findById(req.params.id)
//     .exec(function (err, post) {
//         if (err) {
//             console.log('Error getting the post');
//         } else {
//             res.json(post);
//         }
//     })
// });


// router.delete('/:id', function (req, res, next) {
//     var id = req.params.id;
//     console.log(Post);

//     Post.findByIdAndRemove(id, function (err, deletedPost) {
//         if (err) {
//             console.log('There was an error deleting the post')
//         } if (!post) {
//             return res.send(404);
//         } else {
//             console.log('Removed post');
//         }
//     });
// });


// module.exports = router;
