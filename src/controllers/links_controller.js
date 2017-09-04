const LinkModel = require("../models/link_model")

module.exports = {
    // TODO: implement function
    // Creates a new link document with specified attributes
    create(request, response, error) {
        if (error) { return next(error) }

        LinkModel.find(request.body), (findError, existingLink) => {
            if (findError) { return next(findError) }

            const link = new LinkModel(request.body)
            link.save((saveRrror) => {
                if (saveError) { return next(saveError) }
                response.json(link)
            })
        })
    },

    // TODO: implement function
    // Deletes a specified document from the links collection
    destroy(request, response, error) {
        if (error) { return next(error) }
    },

    // Returns all documents from the links collection
    list(request, response, error) {
        if (error) { return next(error) }

        ((callback, limit) => {
            LinkModel.find(callback).limit(limit)
        })
        ((error, links) => {
            response.json(links)
        })
    },

    // TODO: implement function
    // Updates a specified link document
    update(request, response, error) {
        if (error) { return next(error) }
    }
}
