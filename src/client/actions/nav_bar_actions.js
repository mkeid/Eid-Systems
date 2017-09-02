const MENU_CLOSE = "MENU_CLOSE"
const MENU_OPEN = "MENU_OPEN"

/**
* Action that hides the nav menu
*/
const menuClose = () => ({
    type: MENU_CLOSE
})

/**
* Action that makes the nav menu visible
*/
const menuOpen = () => ({
    type: MENU_OPEN
})

export {
    MENU_CLOSE,
    MENU_OPEN,
    menuClose,
    menuOpen
}
