const LinkModel = require("../models/link_model")

module.exports = {
    // TODO: implement function
    // Creates a new link document with specified attributes
    create: function(request, response) {

    },

    // TODO: implement function
    // Deletes a specified document from the links collection
    destroy: function(request, response) {

    },

    // Returns all documents from the links collection
    list: function(request, response) {
        (function(callback, limit) {
            LinkModel.find(callback).limit(limit)
        })
        (function(error, links) {
            response.json(links)
        })
    },

    // TODO: implement function
    // Updates a specified link document
    update: function(request, response) {

    }
}
