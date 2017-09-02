import { SEND_EMAIL_REQUEST_SUCCESS } from "../actions/contact_actions"

export default (state = {contacted: false}, action) => {
    switch (action.type) {
        // Update state to inform the user of the successful email submission
        case SEND_EMAIL_REQUEST_SUCCESS:
            return {
                contacted: true,
                name: action.payload.data.name,
                email: action.payload.data.email,
                message: action.payload.data.message
            }

        // Only update state when the action type is specified
        default:
            return state;
    }
}
