const PostModel = require("../models/post_model")

module.exports = {
    // Creates a new post document with specified attributes
    create(request, response, error) {
        if (error) { return next(error) }

        PostModel.find(request.body), (findError, existingPost) => {
            if (findError) { return next(findError) }

            const post = new PostModel(request.body)
            post.save((saveRrror) => {
                if (saveError) { return next(saveError) }
                response.json(post)
            })
        })
    },

    // Deletes a specified document from the posts collection
    destroy(request, response, error) {
        if (error) { return next(error) }
    },

    // Returns all documents from the posts collection
    list(request, response, error) {
        if (error) { return next(error) }

        // IIFE that returns  alist of all post documents
        ((callback, limit) => {
            PostModel.find(callback).limit(limit)
        })
        ((error, posts) => {
            response.json({posts})
        })
    },

    // Returns a specified document from the posts collection
    show(request, response, error) {
        if (error) { return next(error) }
    },

    // Updates a specified post document
    update(request, response, error) {
        if (error) { return next(error) }
    }
}
