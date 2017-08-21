import {
    FETCH_STORE_REQUEST,
    FETCH_STORE_REQUEST_SUCCESS,
    FETCH_STORE_ERROR,
    MENU_CLOSE,
    MENU_OPEN
} from "./actions"


/**
* Async action for retrieving our site store
*/
const fetchStoreRequest = () => ({
    type: FETCH_STORE_REQUEST,
    payload: {
        request: {url: "/store"}
    }
})


/**
* Sync action for dealing with successful API response
*/
const fetchStoreSuccess = (payload) => {
    type: FETCH_STORE_REQUEST_SUCCESS,
    payload
}


/**
* Sync action for dealing with failed API response
*/
const fetchStoreError = () => {
    type: FETCH_STORE_ERROR
}


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


/**
* Primary redux reducer for the site
*/
const initState = {menuOpened: true}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_STORE_REQUEST:
            return Object.assign({}, state, {isLoading: true})

        case FETCH_STORE_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                index: action.payload.data.index,
                about: action.payload.data.about,
                nav: action.payload.data.nav,
                posts: action.payload.data.posts,
                projects: action.payload.data.projects,
                skills: action.payload.data.skills,
                isLoading: false,
                menuOpened: true
            })

        case FETCH_STORE_ERROR:
            return Object.assign({}, state,
                {isLoading: false, hasFailed: true})

        case MENU_CLOSE:
            return Object.assign({}, state,
                {menuOpened: false})

        case MENU_OPEN:
            return Object.assign({}, state,
                {menuOpened: true})

        default:
            return state
    }
}


module.exports = {
    fetchStoreRequest,
    menuClose,
    menuOpen,
    reducer
 }
