import {
    SITES_LIST_REQUEST,
    SITES_LIST_REQUEST_SUCCESS
} from "../actions/site_actions"

export default (state = null, action) => {
    switch (action.type) {
        case SITES_LIST_REQUEST:
            return Object.assign({}, state, {isLoading: true})

        case SITES_LIST_REQUEST_SUCCESS:
            const sites = action.payload.data
            return Object.assign({}, state, sites, {isLoading: false})

        // Only update state when the action type is specified
        default:
            return state
    }
}
