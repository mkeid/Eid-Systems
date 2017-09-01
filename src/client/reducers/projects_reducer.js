import _ from "lodash"
import {
    PROJECTS_CREATE_REQUEST_SUCCESS,
    PROJECTS_DESTROY_REQUEST_SUCCESS,
    PROJECTS_LIST_REQUEST_SUCCESS,
    PROJECTS_UPDATE_REQUEST_SUCCESS
} from "../actions/projects"

export default (state = null, action) => {
    switch(action.type) {

        case PROJECTS_CREATE_REQUEST_SUCCESS:
            return Object.assign({}, state,
                {[action.payload.data["_id"]]: action.payload.data}
            )

        case PROJECTS_DESTROY_REQUEST_SUCCESS:
            return _.omit(state, action.payload.data)

        case PROJECTS_UPDATE_REQUEST_SUCCESS:
            return Object.assign({}, state,
                {[action.payload.data["_id"]]: action.payload.data}
            )

        case PROJECTS_LIST_REQUEST_SUCCESS:
            return _.mapKeys(action.payload.data.projects, "_id")

        // Only update state when the action type is specified
        default:
            return state;
    }
}
