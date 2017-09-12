const PostModel = require("../models/post_model")

module.exports = {
    /** Creates a new post document with specified attributes */
    create(request, response, next) {
        PostModel.findOne(request.body,
            (findError, existingPost) => {
                if (findError) {
                    return next(findError)
                }

                const post = new PostModel(request.body)
                post.save((saveRrror) => {
                    if (saveError) {
                        return next(saveError)
                    }

                    response.json({post})
                })
            }
        )
    },

    /** Deletes a specified document from the posts collection */
    destroy(request, response, next) {
    },

    /** Returns all documents from the posts collection */
    list(request, response, next) {
        PostModel.find(
            (error, posts) => {
                response.json({posts})
            }
        )
    },

    /** Returns a specified document from the posts collection */
    show(request, response, next) {
        PostModel.findOne({_id: request.params["post_id"]},
            (error, post) => {
                response.json({post})
            }
        )
    },

    /** Updates a specified post document */
    update(request, response, next) {
        const query = {_id: request.params["post_id"]}
        PostModel.updateOne(query, request.body.post,
            (error, raw) => {
                if (error) {
                    next(error)
                }

                PostModel.findOne({_id: request.params["post_id"]},
                    (error, post) => {
                        response.json({post})
                    }
                )
            }
        )
    }
}
