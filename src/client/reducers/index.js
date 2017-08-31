import { FETCH_STORE_REQUEST_SUCCESS } from "../actions/root"

export default (state = null, action) => {
    switch(action.type) {
        // Update current state with data retrieved regarding the index page
        case FETCH_STORE_REQUEST_SUCCESS:
            return Object.assign({}, action.payload.data.index)

        // Only update state when the action type is specified
        default:
            return state;
    }
}
