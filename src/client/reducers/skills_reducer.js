import _ from "lodash"
import {
    SKILLS_CREATE_REQUEST_SUCCESS,
    SKILLS_DESTROY_REQUEST_SUCCESS,
    SKILLS_LIST_REQUEST_SUCCESS,
    SKILLS_SHOW_REQUEST_SUCCESS,
    SKILLS_UPDATE_REQUEST_SUCCESS
} from "../actions/skill_actions"

export default (state = {}, action) => {
    switch (action.type) {
        // Add a newly created skill item from the payload to the list skills
        case SKILLS_CREATE_REQUEST_SUCCESS:
            return Object.assign({}, state,
                {[action.payload.data["_id"]]: action.payload.data}
            )

        // Removes a skill item from the payload from the list of skills
        case SKILLS_DESTROY_REQUEST_SUCCESS:
            return _.omit(state, action.payload.data["_id"])

        // Retrieves the entire list of skill items
        case SKILLS_LIST_REQUEST_SUCCESS:
            return _.mapKeys(action.payload.data.skills, "_id")

        case SKILLS_SHOW_REQUEST_SUCCESS:
            const skill = action.payload.data.skill
            let showSkills = state.skills

            if (showSkills) {
                showSkills[skill._id] = skill
            } else {
                showSkills = {
                    [skill._id]: skill
                }
            }

            return showSkills

        // Updates a specific skill from the payload retrieved from payload
        case SKILLS_UPDATE_REQUEST_SUCCESS:
            const updatedSkill = action.payload.data
            const updatedSkillHash = {[updatedSkill._id]: updatedSkill}

            let skills = state.skills
            skills.push(updatedSkillHash)

            return Object.assign({}, state, skills)

        // Only update state when the action type is specified
        default:
            return state;
    }
}
