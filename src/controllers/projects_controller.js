const ProjectModel = require("../models/project_model")

module.exports = {
    // Creates a new project document with the specified attributes
    create(request, response, next) {
        ProjectModel.findOne(request.body, (findError, existingProject) => {
            if (findError) { return next(findError) }

            const project = new ProjectModel(request.body)
            project.save((saveRrror) => {
                if (saveError) { return next(saveError) }
                response.json(project)
            })
        })
    },

    // Deletes a specified project document
    destroy(request, response, next) {
    },

    // Returns all documents from the projects collection
    list(request, response, next) {
        ((callback, limit) => {
            ProjectModel.find(callback).sort("type").limit(limit)
        })
        ((error, projects) => {
            response.json(projects)
        })
    },

    // Updates a project document with the specified attributes
    update(request, response, next) {
    }
}
