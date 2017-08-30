const Project = require("../models/project")

module.exports = {
    // TODO: implement function
    // Creates a new project document with the specified attributes
    createProject: function(request, response) {

    },

    // TODO: implement function
    // Deletes a specified project document
    deleteProject: function(request, response) {

    },

    // TODO: implement function
    // Returns all documents from the projects collection
    getProjects: function(request, response) {
        (function(callback, limit) {
            Project.find(callback).limit(limit)
        })
        (function(error, projects) {
            response.json({projects})
        })
    },

    // TODO: implement function
    // Updates a project document with the specified attributes
    updateProject: function(request, response) {

    }
}
