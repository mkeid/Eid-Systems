import {
    LOGIN_REQUEST_SUCCESS,
    LOGOUT_REQUEST_SUCCESS
} from "../actions/auth/auth_actions"

export default (state = null, action) => {
    switch (action.type) {
        case LOGIN_REQUEST_SUCCESS:
            break

        case LOGOUT_REQUEST_SUCCESS:
            break

        // Only update state when the action type is specified
        default:
            return state
    }
}
