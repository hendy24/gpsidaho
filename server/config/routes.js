var blogPosts = require('../controllers/blog-posts.controller.js');

module.exports = function(app) {
    app.get('/api/posts', blogPosts.fetchPosts);
    app.post('/api/posts/add-post', blogPosts.addPost);
    app.get('/api/posts/:id', blogPosts.fetchPost);
    app.delete('/api/posts/:id', blogPosts.deletePost);
    app.put('/api/posts/:id', blogPosts.updatePost);
};
