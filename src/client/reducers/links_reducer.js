import _ from "lodash"
import { LINKS_LIST_REQUEST_SUCCESS } from "../actions/link_actions"

export default (state = null, action) => {
    switch(action.type) {

        case LINKS_LIST_REQUEST_SUCCESS:
            const links = action.payload.data
            return _.mapKeys(links, "_id")

        // Only update state when the action type is specified
        default:
            return state;
    }
}
