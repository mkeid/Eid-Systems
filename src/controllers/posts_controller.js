const PostModel = require("../models/post_model")

module.exports = {
    // TODO: implement function
    // Creates a new post document with specified attributes
    create(request, response) {

    },

    // TODO: implement function
    // Deletes a specified document from the posts collection
    destroy(request, response) {

    },

    // Returns all documents from the posts collection
    list(request, response) {
        ((callback, limit) => {
            PostModel.find(callback).limit(limit)
        })
        ((error, posts) => {
            response.json({posts})
        })
    },

    // TODO: implement function
    // Returns a specified document from the posts collection
    show(request, response) {

    },

    // TODO: implement function
    // Updates a specified post document
    update(request, response) {

    }
}
