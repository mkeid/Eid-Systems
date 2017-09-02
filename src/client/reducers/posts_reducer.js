import _ from "lodash"
import {
    POSTS_CREATE_REQUEST_SUCCESS,
    POSTS_DESTROY_REQUEST_SUCCESS,
    POSTS_SHOW_REQUEST_SUCCESS,
    POSTS_LIST_REQUEST_SUCCESS,
    POSTS_UPDATE_REQUEST_SUCCESS
} from "../actions/post_actions"

export default (state = null, action) => {
    switch(action.type) {

        case POSTS_CREATE_REQUEST_SUCCESS:
            return Object.assign({}, state,
                {[action.payload.data["_id"]]: action.payload.data}
            )

        case POSTS_DESTROY_REQUEST_SUCCESS:
            return _.omit(state, action.payload.data["_id"])

        case POSTS_SHOW_REQUEST_SUCCESS:
            return Object.assign({}, state,
                {[action.payload.data["_id"]]: action.payload.data}
            )

        case POSTS_LIST_REQUEST_SUCCESS:
            const posts = action.payload.data.posts
            return _.mapKeys(posts, "_id")

        case POSTS_UPDATE_REQUEST_SUCCESS:
            return Object.assign({}, state,
                {[action.payload.data["_id"]]: action.payload.data}
            )

        // Only update state when the action type is specified
        default:
            return state;
    }
}
