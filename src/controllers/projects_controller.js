const ProjectModel = require("../models/project_model")

module.exports = {
    // TODO: implement function
    // Creates a new project document with the specified attributes
    create: function(request, response) {

    },

    // TODO: implement function
    // Deletes a specified project document
    destroy: function(request, response) {

    },

    // Returns all documents from the projects collection
    list: function(request, response) {
        (function(callback, limit) {
            ProjectModel.find(callback).sort("type").limit(limit)
        })
        (function(error, projects) {
            response.json({projects})
        })
    },

    // TODO: implement function
    // Updates a project document with the specified attributes
    update: function(request, response) {

    }
}
