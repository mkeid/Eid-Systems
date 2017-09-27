const fs = require("fs")
const path = require("path")
const PostModel = require("../models/post_model")
const appDir = path.dirname(require.main.filename)

module.exports = {
    /** Creates a new post document with specified attributes */
    create(request, response, next) {
        const { file, params } = request
        const publicPath = "/images/posts/" + file.originalname
        const savePath = path.resolve(appDir + "/../public" + publicPath)

        // Attempt to save the document's image file
        fs.writeFile(savePath, file.buffer, error => {
            if (error) {
                next(error)
            }

            const postData = JSON.parse(request.body.post)
            postData.imgSrc = publicPath
            const post = new PostModel(postData)

            post.save((error) => {
                if (error) {
                    return next(error)
                }

                response.json({post})
            })
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
        const { file, params } = request
        const publicPath = "/images/posts/" + file.originalname
        const savePath = path.resolve(appDir + "/../public" + publicPath)

        // Attempt to save the document's image file
        fs.writeFile(savePath, file.buffer, error => {
            if (error) {
                next(error)
            }

            const post = JSON.parse(request.body.post)
            post.imgSrc = publicPath
            const query = {_id: request.params["post_id"]}

            PostModel.updateOne(query, post,
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
        })
    }
}
