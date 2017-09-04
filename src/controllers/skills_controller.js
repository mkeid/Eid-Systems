const SkillModel = require("../models/skill_model")

module.exports = {
    // Creates a new skill document with the specified attributes
    create(request, response, next) {
        SkillModel.findOne(request.body, (findError, existingSkill) => {
            if (findError) { return next(findError) }

            const skill = new SkillModel(request.body)
            skill.save((saveRrror) => {
                if (saveError) { return next(saveError) }
                response.json(skill)
            })
        })
    },

    // Deletes a specified skill document
    destroy(request, response, next) {
    },

    // Returns all documents in the skills collection
    list(request, response, next) {
        ((callback, limit) => {
            SkillModel.find(callback).limit(limit)
        })
        ((error, skills) => {
            response.json({skills})
        })
    },

    // Updates a skill document with the specified attributes
    update(request, response, next) {
    }
}
