/**
* Calls async action to retrieve data store from API
*/
const fetchStore = () => {
    dispatch => {dispatch(fetchStoreRequest())}
}


/**
* Async action for retrieving our site store
*/
const fetchStoreRequest = () => ({
    type: "FETCH_STORE_REQUEST",
    payload: {
        request: {
            url: "/store"
        }
    }
})


/**
* Sync action for dealing with successful API response
*/
const fetchStoreSuccess = (payload) => {
    type: "FETCH_STORE_REQUEST_SUCCESS",
    payload
}


/**
* Sync action for dealing with failed API response
*/
const fetchStoreError = () => {
    type: "FETCH_STORE_ERROR"
}


/**
* Primary redux reducer for the site
*/
const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_STORE_REQUEST":
            return Object.assign({}, state, {isLoading: true})
        case "FETCH_STORE_REQUEST_SUCCESS":
            return {

                index: action.payload.data.index,
                about: action.payload.data.about,
                nav: action.payload.data.nav,
                posts: action.payload.data.posts,
                projects: action.payload.data.projects,
                skills: action.payload.data.skills,
                isLoading: false
            }
        case "FETCH_STORE_ERROR":
            return Object.assign({}, state, {isLoading: false, hasFailed: true})
        default:
            return state
    }
}


module.exports = { fetchStore, fetchStoreRequest, reducer }
