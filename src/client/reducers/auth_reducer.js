import {
    LOGIN_REQUEST_FAIL,
    LOGIN_REQUEST_SUCCESS,
    LOGOUT
} from "../actions/auth_actions";

const initState = {
    isAuthenticated: localStorage.getItem("token") !== undefined
};

export default (state = initState, action) => {
    switch (action.type) {
        // A user failed to login
        case LOGIN_REQUEST_FAIL:
            return {error: "Invalid credentials!"};

        // A user provided the correct credentials
        case LOGIN_REQUEST_SUCCESS:
            const { token } = action.payload.data;
            localStorage.setItem("token", token);
            return {isAuthenticated: true};

        // A user has dispatched to logout
        case LOGOUT:
            localStorage.removeItem("token");
            return {isAuthenticated: false};

        // Only update state when the action type is specified
        default:
            return state;
    }
};
