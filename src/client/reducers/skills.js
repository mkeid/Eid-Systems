import _ from "lodash"
import {
    CREATE_SKILL_REQUEST_SUCCESS,
    DELETE_SKILL_REQUEST_SUCCESS,
    FETCH_SKILLS_REQUEST_SUCCESS,
    UPDATE_SKILL_REQUEST_SUCCESS
} from "../actions/skills"

export default (state = null, action) => {
    switch(action.type) {
        case CREATE_SKILL_REQUEST_SUCCESS:
            return Object.assign({}, state,
                {[action.payload.data["_id"]]: action.payload.data}
            )

        case DELETE_SKILL_REQUEST_SUCCESS:
            return _.omit(state, action.payload.data["_id"])

        case FETCH_SKILLS_REQUEST_SUCCESS:
            return _.mapKeys(action.payload.data.skills, "_id")

        case UPDATE_SKILL_REQUEST_SUCCESS:
            return Object.assign({}, state,
                {[action.payload.data["_id"]]: action.payload.data}
            )

        default:
            return state;
    }
}
