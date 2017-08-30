import { FETCH_STORE_REQUEST_SUCCESS } from "../actions/root"

export default (state = null, action) => {
    switch(action.type) {

        case FETCH_STORE_REQUEST_SUCCESS:
            return Object.assign({}, action.payload.data.index)
            
        default:
            return state;
    }
}
