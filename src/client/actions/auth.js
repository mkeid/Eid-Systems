const LOGIN_REQUEST = "LOGIN_REQUEST"
const LOGIN_REQUEST_SUCCESS = "LOGIN_REQUEST_SUCCESS"
const LOGOUT_REQUEST = "LOGOUT_REQUEST"
const LOGOUT_REQUEST_SUCCESS = "LOGOUT_REQUEST_SUCCESS"


/**
* Async action creator authenticating the user
*/
const login = (credentials) => ({
    type: LOGIN_REQUEST,
    payload: {
        request: {
            method: "post",
            url: "/auth/login",
            data: credentials
        }
    }
})


/**
* Async action creator that removes the session token
*/
const logout = () => ({
    type: LOGOUT_REQUEST,
    payload: {
        request: {
            method: "post",
            url: "/auth/logout"
        }
    }
})


export {
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS,
    LOGOUT_REQUEST,
    LOGOUT_REQUEST_SUCCESS
    login,
    logout
}
