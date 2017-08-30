import _ from "lodash"
import {
    CREATE_POST_REQUEST_SUCCESS,
    DELETE_POST_REQUEST_SUCCESS,
    FETCH_POST_REQUEST_SUCCESS,
    FETCH_POSTS_REQUEST_SUCCESS,
    UPDATE_POST_REQUEST_SUCCESS
} from "../actions/posts"

export default (state = null, action) => {
    switch(action.type) {
        
        case CREATE_POST_REQUEST_SUCCESS:
            return Object.assign({}, state,
                {[action.payload.data["_id"]]: action.payload.data}
            )

        case DELETE_POST_REQUEST_SUCCESS:
            return _.omit(state, action.payload.data["_id"])

        case FETCH_POST_REQUEST_SUCCESS:
            return Object.assign({}, state,
                {[action.payload.data["_id"]]: action.payload.data}
            )

        case FETCH_POSTS_REQUEST_SUCCESS:
            return _.mapKeys(action.payload.data.posts, "_id")

        case UPDATE_POST_REQUEST_SUCCESS:
            return Object.assign({}, state,
                {[action.payload.data["_id"]]: action.payload.data}
            )

        default:
            return state;
    }
}
