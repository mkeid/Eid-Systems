import {
    LOGIN_REQUEST_SUCCESS,
    LOGOUT
} from "../actions/auth_actions"

export default (state = null, action) => {
    switch (action.type) {
        case LOGIN_REQUEST_SUCCESS:
            break

        case LOGOUT:
            return null

        // Only update state when the action type is specified
        default:
            return state
    }
}
