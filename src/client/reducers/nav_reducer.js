import { FETCH_STORE_REQUEST_SUCCESS } from "../actions/root"
import { MENU_CLOSE, MENU_OPEN } from "../actions/nav_bar_actions"

const initState = { menuOpened: false }
export default (state = initState, action) => {
    switch(action.type) {
        // Update the current state with data retrieved regarding the nav bar
        case FETCH_STORE_REQUEST_SUCCESS:
            const payload = action.payload.data.nav
            return Object.assign({}, payload, {menuOpened: false})

        // Set the current state to reflect that the mobile menu is open
        case MENU_CLOSE:
            return Object.assign({}, state, {menuOpened: false})

        // Set the current state to reflect that the mobile menu is closed
        case MENU_OPEN:
            return Object.assign({}, state, {menuOpened: true})

        // Only update state when the action type is specified
        default:
            return state;
    }
}
