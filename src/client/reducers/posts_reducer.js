import _ from "lodash"
import {
    POSTS_CREATE_REQUEST_SUCCESS,
    POSTS_DESTROY_REQUEST_SUCCESS,
    POSTS_SHOW_REQUEST_SUCCESS,
    POSTS_LIST_REQUEST_SUCCESS,
    POSTS_UPDATE_REQUEST_SUCCESS
} from "../actions/post_actions"

export default (state = {}, action) => {
    switch (action.type) {
        // Created a new post document
        case POSTS_CREATE_REQUEST_SUCCESS:
            return Object.assign({}, state,
                {[action.payload.data["_id"]]: action.payload.data}
            )

        // Destroyed a single post document
        case POSTS_DESTROY_REQUEST_SUCCESS:
            return _.omit(state, action.payload.data["_id"])

        // Retrieved a list of post documents
        case POSTS_LIST_REQUEST_SUCCESS:
            const posts = action.payload.data.posts
            return _.mapKeys(posts, "_id")

        // Retrieved a single post document
        case POSTS_SHOW_REQUEST_SUCCESS:
            const post = action.payload.data.post
            let showPosts = state.posts

            if (showPosts) {
                showPosts[post._id] = post
            } else {
                showPosts = {
                    [post._id]: post
                }
            }

            return showPosts

        // Updated a single post document
        case POSTS_UPDATE_REQUEST_SUCCESS:
            return Object.assign({}, state,
                {[action.payload.data["_id"]]: action.payload.data}
            )

        // Only update state when the action type is specified
        default:
            return state;
    }
}
