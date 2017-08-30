const Post = require("../models/post")

module.exports = {
    // TODO: implement function
    // Creates a new post document with specified attributes
    createPost: function(request, response) {

    },

    // TODO: implement function
    // Deletes a specified document from the posts collection
    deletePost: function(request, response) {

    },

    // TODO: implement function
    // Returns a specified document from the posts collection
    getPost: function(request, response) {

    },

    // TODO: implement function
    // Returns all documents from the posts collection
    getPosts: function(request, response) {
        (function(callback, limit) {
            Post.find(callback).limit(limit)
        })
        (function(error, posts) {
            response.json({posts})
        })
    },

    // TODO: implement function
    // Updates a specified post document
    updatePost: function(request, response) {

    }
}
