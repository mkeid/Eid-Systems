import { SEND_EMAIL_REQUEST_SUCCESS } from "../actions/contact"

export default (state = {contacted: false}, action) => {
    switch(action.type) {
        case SEND_EMAIL_REQUEST_SUCCESS:
            return {
                contacted: true,
                name: action.payload.data.name,
                email: action.payload.data.email,
                message: action.payload.data.message
            }
        default:
            return state;
    }
}
