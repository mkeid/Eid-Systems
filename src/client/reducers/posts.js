import _ from "lodash"
import {
    CREATE_POST_REQUEST_SUCCESS,
    DELETE_POST_REQUEST_SUCCESS,
    UPDATE_POST_REQUEST_SUCCESS,
    FETCH_POST_REQUEST_SUCCESS,
    FETCH_STORE_REQUEST_SUCCESS
} from "../actions/root"

export default (state = null, action) => {
    switch(action.type) {
        case CREATE_POST_REQUEST_SUCCESS:
            return null
        case DELETE_POST_REQUEST_SUCCESS:
            return null
        case UPDATE_POST_REQUEST_SUCCESS:
            return null
        case FETCH_POST_REQUEST_SUCCESS:
            return null
        case FETCH_STORE_REQUEST_SUCCESS:
            return _.mapKeys(action.payload.data.posts, "_id")
        default:
            return state;
    }
}
