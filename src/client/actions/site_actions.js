const SITES_LIST_REQUEST = "SITES_LIST_REQUEST"
const SITES_LIST_REQUEST_SUCCESS = "SITES_LIST_REQUEST_SUCCESS"

/**
* Async action creator that returns a list of sites
*/
const fetchSites = () => ({
    type: SITES_LIST_REQUEST,
    payload: {
        request: {
            url: "/sites"
        }
    }
})

export {
    SITES_LIST_REQUEST,
    SITES_LIST_REQUEST_SUCCESS,
    fetchSites
}
