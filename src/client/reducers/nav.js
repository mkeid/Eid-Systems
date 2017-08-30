import { FETCH_STORE_REQUEST_SUCCESS } from "../actions/root"
import { MENU_CLOSE, MENU_OPEN } from "../actions/nav"

const initState = {menuOpened: false}
export default (state = initState, action) => {
    switch(action.type) {

        case FETCH_STORE_REQUEST_SUCCESS:
            const payload = action.payload.data.nav
            return Object.assign({}, payload, {menuOpened: false})

        case MENU_CLOSE:
            return Object.assign({}, state, {menuOpened: false})

        case MENU_OPEN:
            return Object.assign({}, state, {menuOpened: true})
            
        default:
            return state;
    }
}
