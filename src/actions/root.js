const FETCH_STORE_REQUEST = "FETCH_STORE_REQUEST"
const FETCH_STORE_REQUEST_SUCCESS = "FETCH_STORE_REQUEST_SUCCESS"
const FETCH_STORE_ERROR = "FETCH_STORE_ERROR"


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


module.exports = {
    FETCH_STORE_REQUEST,
    FETCH_STORE_REQUEST_SUCCESS,
    FETCH_STORE_ERROR,
    fetchStoreRequest,
    fetchStoreSuccess,
    fetchStoreError
}
