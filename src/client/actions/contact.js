const SEND_EMAIL_REQUEST = "SEND_EMAIL_REQUEST"
const SEND_EMAIL_REQUEST_SUCCESS = "SEND_EMAIL_REQUEST_SUCCESS"


/**
* Async action creator that sends an email to the site admin
*/
const sendEmail = (name, email, message) => ({
    type: SEND_EMAIL_REQUEST,
    payload: {
        request: {
            method: "post",
            url: "/contact",
            data: {name, email, message}
        }
    }
})


module.exports = {
    SEND_EMAIL_REQUEST,
    SEND_EMAIL_REQUEST_SUCCESS,
    sendEmail
}
