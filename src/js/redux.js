const fetchStore = () => {
    (dispatch) => {
        dispatch(fetchStoreRequest())
    }
}

// Async action for retrieving our site store
const fetchStoreRequest = function() {
    return {
        type: "FETCH_STORE_REQUEST",
        payload: {
            request: {
                url: "/store"
            }
        }
    }
}

const fetchStoreSuccess = (payload) => {
    type: "FETCH_STORE_REQUEST_SUCCESS",
    console.log(payload)
    payload
}

const fetchStoreError = () => {
    type: "FETCH_STORE_ERROR"
}

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_STORE_REQUEST":
            return Object.assign({}, state, {isLoading: true})
        case "FETCH_STORE_REQUEST_SUCCESS":
            console.log(action)
            return {
                index: action.payload.data.index,
                about: action.payload.data.about,
                nav: action.payload.data.nav,
                posts: action.payload.data.posts,
                projects: action.payload.data.projects,
                skills: action.payload.data.skills,
                isLoading: false
            }
        default:
            return state
    }
}

module.exports = {
    fetchStore,
    fetchStoreRequest,
    reducer
}
