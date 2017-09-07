const LOGIN_REQUEST = "LOGIN_REQUEST"
const LOGIN_REQUEST_FAIL = "LOGIN_REQUEST_FAIL"
const LOGIN_REQUEST_SUCCESS = "LOGIN_REQUEST_SUCCESS"
const LOGOUT = "LOGOUT"


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
    type: LOGOUT
})


export {
    LOGIN_REQUEST,
    LOGIN_REQUEST_FAIL,
    LOGIN_REQUEST_SUCCESS,
    LOGOUT,
    login,
    logout
}
