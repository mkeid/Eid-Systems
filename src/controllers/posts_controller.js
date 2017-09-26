const fs = require("fs")
const PostModel = require("../models/post_model")

module.exports = {
    /** Creates a new post document with specified attributes */
    create(request, response, next) {
        const postData = Object.assign(request.body.post, {imgSrc: "/test"})
        console.log(postData)
        const post = new PostModel(postData)

        post.save((error) => {
            if (error) {
                return next(error)
            }

            response.json({post})
        })
    },

    /** Deletes a specified document from the posts collection */
    destroy(request, response, next) {
        PostModel.findByIdAndRemove(request.params["post_id"],
            (error, raw) => {
                if (error) {
                    return next(error)
                }

                response.json(raw)
            }
        )
    },

    /** Returns all documents from the posts collection */
    list(request, response, next) {
        PostModel.find(
            (error, posts) => {
                response.json({posts})
            }
        ).sort({data: "descending"})
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
        const { file } = request

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
