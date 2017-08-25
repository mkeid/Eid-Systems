import { SEND_EMAIL_REQUEST_SUCCESS } from "../actions/contact"

export default (state = {contacted: false}, action) => {
    switch(action.type) {
        case SEND_EMAIL_REQUEST_SUCCESS:
            return {contacted: true}
        default:
            return state;
    }
}
