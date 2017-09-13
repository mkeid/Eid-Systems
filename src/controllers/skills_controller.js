const SkillModel = require("../models/skill_model")

module.exports = {
    /** Creates a new skill document with the specified attributes */
    create(request, response, next) {
        const skillData = Object.assign(request.body.skill, {imgSrc: "/"})
        const skill = new SkillModel(skillData)

        skill.save((error) => {
            if (error) {
                return next(error)
            }

            response.json(skill)
        })
    },

    /** Deletes a specified skill document */
    destroy(request, response, next) {
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
        const query = {_id: request.params["skill_id"]}
        SkillModel.updateOne(query, request.body.skill,
            (error, raw) => {
                if (error) {
                    next(error)
                }

                SkillModel.findOne({_id: request.params["skill_id"]},
                    (error, skill) => response.json({skill})
                )
            }
        )
    }
}
