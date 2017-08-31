import _ from "lodash"
import {
    CREATE_PROJECT_REQUEST_SUCCESS,
    DELETE_PROJECT_REQUEST_SUCCESS,
    UPDATE_PROJECT_REQUEST_SUCCESS,
    FETCH_STORE_REQUEST_SUCCESS
} from "../actions/root"

export default (state = null, action) => {
    switch(action.type) {

        case CREATE_PROJECT_REQUEST_SUCCESS:
            return Object.assign({}, state,
                {[action.payload.data["_id"]]: action.payload.data}
            )

        case DELETE_PROJECT_REQUEST_SUCCESS:
            return _.omit(state, action.payload.data)

        case UPDATE_PROJECT_REQUEST_SUCCESS:
            return Object.assign({}, state,
                {[action.payload.data["_id"]]: action.payload.data}
            )

        case FETCH_STORE_REQUEST_SUCCESS:
            return _.mapKeys(action.payload.data.projects, "_id")

        // Only update state when the action type is specified
        default:
            return state;
    }
}
