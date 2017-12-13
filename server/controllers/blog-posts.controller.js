var BlogPost = require('../models/blog-post.model');
// var BlogPost = require('mongoose').model('BlogPost');


// Find the most recent blog posts
exports.fetchPosts = function(req, res, next) {
  var numPosts = null;

  // if the url has the number of posts to return, use it...
  if (req.query.numPosts) {
    numPosts = Number(req.query.numPosts);
  }
  BlogPost.find({})
          .limit(numPosts)
          .sort({date: -1})
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
    post.author = 'Update for real author';
    //post.author = req.body.author;
    post.content = req.body.content;
    console.log(post);
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
        console.log('There was nothing to save.');
        res.json('Please enter information to save for the new post');
    }
}

exports.updatePost = function (req, res, next) {
    var id = req.params.id;
    BlogPost.findById(id, function (err, item) {
        if (err) console.log('Could not find the post');
        item.set({
            'title': req.body.title,
            'content': req.body.content,
            'author': 'this needs to be updated in the updatepost function',
            'date': Date()
        });
        item.save(function (err, updatedPost) {
            if (err) {
                console.log(err);
            } else {
                res.send(updatedPost);
            }
        })   
    });
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