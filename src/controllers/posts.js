const Post = require("../models/post")

module.exports = {
    // TODO: implement function
    // Creates a new post document with specified attributes
    create: function(request, response) {

    },

    // TODO: implement function
    // Deletes a specified document from the posts collection
    destroy: function(request, response) {

    },

    // Returns all documents from the posts collection
    list: function(request, response) {
        (function(callback, limit) {
            Post.find(callback).limit(limit)
        })
        (function(error, posts) {
            response.json({posts})
        })
    },

    // TODO: implement function
    // Returns a specified document from the posts collection
    show: function(request, response) {

    },

    // TODO: implement function
    // Updates a specified post document
    update: function(request, response) {

    }
}
