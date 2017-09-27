const fs = require("fs")
const path = require("path")
const SkillModel = require("../models/skill_model")
const appDir = path.dirname(require.main.filename)

module.exports = {
    /** Creates a new skill document with the specified attributes */
    create(request, response, next) {
        const { file, params } = request
        const publicPath = "/images/about/" + file.originalname
        const savePath = path.resolve(appDir + "/../public" + publicPath)

        // Attempt to save the document's image file
        fs.writeFile(savePath, file.buffer, error => {
            if (error) {
                next(error)
            }

            const skillData = JSON.parse(request.body.skill)
            skillData.imgSrc = publicPath
            const skill = new SkillModel(skillData)

            skill.save((error) => {
                if (error) {
                    return next(error)
                }

                response.json(skill)
            })
        })
    },

    /** Deletes a specified skill document */
    destroy(request, response, next) {
        SkillModel.findByIdAndRemove(request.params["skill_id"],
            (error, raw) => {
                if (error) {
                    return next(error)
                }

                response.json(raw)
            }
        )
    },

    /** Returns all documents in the skills collection */
    list(request, response, next) {
        const callback = (error, skills) => {
            response.json({skills})
        }

        SkillModel.find(callback)
    },

    /** Returns a specified document from the skills collection */
    show(request, response, next) {
        SkillModel.findOne({_id: request.params["skill_id"]},
            (error, skill) => {
                response.json({skill})
            }
        )
    },

    /** Updates a skill document with the specified attributes */
    update(request, response, next) {
        const { file, params } = request
        const publicPath = "/images/about/" + file.originalname
        const savePath = path.resolve(appDir + "/../public" + publicPath)

        // Attempt to save the document's image file
        fs.writeFile(savePath, file.buffer, error => {
            if (error) {
                next(error)
            }

            // Parse the json object and assign its image path
            const skill = JSON.parse(request.body.skill)
            skill.imgSrc = publicPath

            const query = {_id: params["skill_id"]}
            SkillModel.updateOne(query, skill,
                (error, raw) => {
                    if (error) {
                        next(error)
                    }

                    SkillModel.findOne({_id: params["skill_id"]},
                        (error, skill) => {
                            console.log(skill)
                            response.json({skill})
                        }
                    )
                }
            )
        })
    }
}
