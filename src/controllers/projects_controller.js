const ProjectModel = require("../models/project_model")

module.exports = {
    /** Creates a new project document with the specified attributes */
    create(request, response, next) {
        const projectData = Object.assign(request.body.project, {imgSrc: "/"})
        const project = new ProjectModel(projectData)

        project.save((error) => {
            if (error) {
                return next(error)
            }
            response.json({project})
        })
    },

    /** Deletes a specified project document */
    destroy(request, response, next) {
        ProjectModel.findByIdAndRemove(request.params["project_id"],
            (error, raw) => {
                if (error) {
                    return next(error)
                }

                response.json(raw)
            }
        )
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
        ProjectModel.findOne({_id: request.params["project_id"]},
            (error, project) => {
                response.json({project})
            }
        )
    },

    /** Updates a project document with the specified attributes */
    update(request, response, next) {
        const query = {_id: request.params["project_id"]}
        ProjectModel.updateOne(query, request.body.project,
            (error, raw) => {
                if (error) {
                    next(error)
                }

                ProjectModel.findOne({_id: request.params["project_id"]},
                    (error, project) => response.json({project})
                )
            }
        )
    }
}
