const LinkModel = require("../models/link_model")

module.exports = {
    /** Creates a new link document with specified attributes */
    create(request, response, next) {
        LinkModel.findOne(request.body,
            (findError, existingLink) => {
                if (findError) {
                    return next(findError)
                }

                const link = new LinkModel(request.body)
                link.save(saveRrror => {
                    if (saveError) {
                        return next(saveError)
                    }
                    response.json(link)
                })
            }
        )
    },

    /** Deletes a specified document from the links collection */
    destroy(request, response, next) {
    },

    // Returns all documents from the links collection
    list(request, response, next) {
        LinkModel.find(
            (error, links) => {
                response.json({links})
            }
        )
    },

    /** Updates a specified link document */
    update(request, response, next) {
        LinkModel.updateOne({"_id": request.params["link_id"]}, request.body,
            (error, raw) => {
                if (error) {
                    next(error)
                }

                LinkModel.findOne({"_id": request.params["link_id"]},
                    (error, link) => response.json({link})
                )
            }
        )
    }
}
