const ProjectModel = require("../models/project_model")

module.exports = {
    // TODO: implement function
    // Creates a new project document with the specified attributes
    create(request, response) {

    },

    // TODO: implement function
    // Deletes a specified project document
    destroy(request, response) {

    },

    // Returns all documents from the projects collection
    list(request, response) {
        ((callback, limit) => {
            ProjectModel.find(callback).sort("type").limit(limit)
        })
        ((error, projects) => {
            response.json({projects})
        })
    },

    // TODO: implement function
    // Updates a project document with the specified attributes
    update(request, response) {

    }
}
