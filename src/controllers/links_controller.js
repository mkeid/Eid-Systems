const LinkModel = require("../models/link_model")

module.exports = {
    /** Creates a new link document with specified attributes */
    create(request, response, next) {
        const link = new LinkModel(request.body.link)
        link.save(error => {
            if (error) {
                return next(error)
            }
            
            response.json(link)
        })
    },

    /** Deletes a specified document from the links collection */
    destroy(request, response, next) {
        LinkModel.findByIdAndRemove(request.params["link_id"],
            (error, raw) => {
                if (error) {
                    return next(error)
                }

                response.json(raw)
            }
        )
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
