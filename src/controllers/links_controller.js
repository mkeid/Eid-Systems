const LinkModel = require("../models/link_model")

module.exports = {
    // TODO: implement function
    // Creates a new link document with specified attributes
    create(request, response) {

    },

    // TODO: implement function
    // Deletes a specified document from the links collection
    destroy(request, response) {

    },

    // Returns all documents from the links collection
    list(request, response) {
        ((callback, limit) => {
            LinkModel.find(callback).limit(limit)
        })
        ((error, links) => {
            response.json(links)
        })
    },

    // TODO: implement function
    // Updates a specified link document
    update(request, response) {

    }
}
