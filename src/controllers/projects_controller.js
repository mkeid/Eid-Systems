const ProjectModel = require("../models/project_model")

module.exports = {
    /** Creates a new project document with the specified attributes */
    create(request, response, next) {
        ProjectModel.findOne(request.body,
            (findError, existingProject) => {
                if (findError) { return next(findError) }

                const project = new ProjectModel(request.body)
                project.save((saveRrror) => {
                    if (saveError) { return next(saveError) }
                    response.json({project})
                })
            }
        )
    },

    /** Deletes a specified project document */
    destroy(request, response, next) {
    },

    /** Returns all documents from the projects collection */
    list(request, response, next) {
        ProjectModel.find(
            (error, projects) => {
                response.json({projects})
            }
        ).sort("type")
    },

    /** Returns a specified document from the projects collection */
    show(request, response, next) {
        ProjectModel.findOne({"_id": request.params["project_id"]},
            (error, project) => {
                response.json({project})
            }
        )
    },

    /** Updates a project document with the specified attributes */
    update(request, response, next) {
    }
}
