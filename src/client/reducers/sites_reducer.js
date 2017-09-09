import {
    SITES_LIST_REQUEST,
    SITES_LIST_REQUEST_SUCCESS,
    SITES_SHOW_REQUEST
} from "../actions/site_actions"

export default (state = null, action) => {
    switch (action.type) {
        // Dispatched a call to retrieve a list of sites
        case SITES_LIST_REQUEST:
            return Object.assign({}, state, {isLoading: true})

        // Retrieved the entire list of site documents
        case SITES_LIST_REQUEST_SUCCESS:
            const sites = action.payload.data.sites
            return Object.assign({}, state, sites, {isLoading: false})

        // Retrieved a single site document
        case SITES_SHOW_REQUEST:
            const site = action.payload.data.site
            return Object.assign(state, site)

        // Only update state when the action type is specified
        default:
            return state
    }
}
