import { MENU_CLOSE, MENU_OPEN } from "../actions/nav_bar_actions"

const initState = { menuOpened: false }
export default (state = initState, action) => {
    switch (action.type) {
        // Set the current state to reflect that the mobile menu is open
        case MENU_CLOSE:
            return {menuOpened: false}

        // Set the current state to reflect that the mobile menu is closed
        case MENU_OPEN:
            return {menuOpened: true}

        // Only update state when the action type is specified
        default:
            return state;
    }
}
