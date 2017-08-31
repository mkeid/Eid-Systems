import _ from "lodash"
import {
    CREATE_SKILL_REQUEST_SUCCESS,
    DELETE_SKILL_REQUEST_SUCCESS,
    FETCH_SKILLS_REQUEST_SUCCESS,
    UPDATE_SKILL_REQUEST_SUCCESS
} from "../actions/skills"

export default (state = null, action) => {
    switch(action.type) {
        // Add a newly created skill item from the payload to the list skills
        case CREATE_SKILL_REQUEST_SUCCESS:
            return Object.assign({}, state,
                {[action.payload.data["_id"]]: action.payload.data}
            )

        // Removes a skill item from the payload from the list of skills
        case DELETE_SKILL_REQUEST_SUCCESS:
            return _.omit(state, action.payload.data["_id"])

        // Retrieves the entire list of skill items
        case FETCH_SKILLS_REQUEST_SUCCESS:
            return _.mapKeys(action.payload.data.skills, "_id")

        // Updates a specific skill from the payload retrieved from the payload
        case UPDATE_SKILL_REQUEST_SUCCESS:
            return Object.assign({}, state,
                {[action.payload.data["_id"]]: action.payload.data}
            )

        // Only update state when the action type is specified
        default:
            return state;
    }
}
