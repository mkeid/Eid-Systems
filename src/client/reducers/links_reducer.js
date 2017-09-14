import _ from "lodash"
import { LINKS_LIST_REQUEST_SUCCESS } from "../actions/link_actions"

export default (state = {}, action) => {
    switch (action.type) {
        // Retrieved a list of link documents
        case LINKS_LIST_REQUEST_SUCCESS:
            const links = action.payload.data.links
            return _.mapKeys(links, "_id")

        // Only update state when the action type is specified
        default:
            return state;
    }
}
