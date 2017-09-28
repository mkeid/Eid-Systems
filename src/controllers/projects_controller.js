const fs = require("fs")
const path = require("path")
const ProjectModel = require("../models/project_model")
const appDir = path.dirname(require.main.filename)

module.exports = {
    /** Creates a new project document with the specified attributes */
    create(request, response, next) {
        console.log(request.headers)

        const { file, params } = request
        const publicPath = "/images/projects/" + file.originalname
        const savePath = path.resolve(appDir + "/../public" + publicPath)

        // Attempt to save the document's image file
        fs.writeFile(savePath, file.buffer, error => {
            if (error) {
                next(error)
            }

            const projectData = JSON.parse(request.body.project)
            projectData.imgSrc = publicPath
            const project = new ProjectModel(projectData)

            project.save((error) => {
                if (error) {
                    return next(error)
                }
                response.json({project})
            })
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
        const { file, params } = request
        const publicPath = "/images/projects/" + file.originalname
        const savePath = path.resolve(appDir + "/../public" + publicPath)

        // Attempt to save the document's image file
        fs.writeFile(savePath, file.buffer, error => {
            if (error) {
                next(error)
            }

            const project = JSON.parse(request.body.project)
            project.imgSrc = publicPath
            const query = {_id: request.params["project_id"]}

            ProjectModel.updateOne(query, project,
                (error, raw) => {
                    if (error) {
                        next(error)
                    }

                    ProjectModel.findOne({_id: request.params["project_id"]},
                        (error, project) => response.json({project})
                    )
                }
            )
        })
    }
}
