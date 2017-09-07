import {
    LOGIN_REQUEST_FAIL,
    LOGIN_REQUEST_SUCCESS,
    LOGOUT
} from "../actions/auth_actions"

const initState = {
    isAuthenticated: localStorage.getItem("token") != undefined
}

export default (state = initState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST_FAIL:
            return {error: "Invalid credentials!"}

        case LOGIN_REQUEST_SUCCESS:
            const { token } = action.payload.data
            localStorage.setItem("token", token)
            return {isAuthenticated: true}

        case LOGOUT:
            localStorage.removeItem("token")
            return {isAuthenticated: false}

        // Only update state when the action type is specified
        default:
            return state
    }
}
