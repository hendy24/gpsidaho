var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogPostSchema = new Schema({
    title: {type: String, required: '{PATH} is required'},
    date: { type: Date, default: Date.now },
    image: String,
    content: {type: String, required: '{PATH} is required'},
    author: String,
    // comments: [{ body: String, date: Date }],
    // hidden: Boolean
});

blogPostSchema.methods = {
    findRecentPosts: function() {
        console.log('hello from the blog model');
        // return this.model('BlogPost').find({}).exec(function(err, collection) {
        //     if (err) {
        //         console.log('Could not find the posts');
        //     } else {
        //         console.log(collection);
        //     }
        // });
    },
    deleteById: function() {
        console.log('Trying to delete');
    }
};

module.exports = mongoose.model('BlogPost', blogPostSchema);
