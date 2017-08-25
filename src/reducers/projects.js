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
            return null
        case DELETE_PROJECT_REQUEST_SUCCESS:
            return null
        case UPDATE_PROJECT_REQUEST_SUCCESS:
            return null
        case FETCH_STORE_REQUEST_SUCCESS:
            return _.mapKeys(action.payload.data.projects, "_id")
        default:
            return state;
    }
}
