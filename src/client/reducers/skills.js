import _ from "lodash"
import {
    CREATE_SKILL_REQUEST_SUCCESS,
    DELETE_SKILL_REQUEST_SUCCESS,
    UPDATE_SKILL_REQUEST_SUCCESS,
    FETCH_STORE_REQUEST_SUCCESS
 } from "../actions/root"

export default (state = null, action) => {
    switch(action.type) {
        case CREATE_SKILL_REQUEST_SUCCESS:
            return null
        case DELETE_SKILL_REQUEST_SUCCESS:
            return null
        case UPDATE_SKILL_REQUEST_SUCCESS:
            return null
        case FETCH_STORE_REQUEST_SUCCESS:
            return _.mapKeys(action.payload.data.skills, "_id")
        default:
            return state;
    }
}
