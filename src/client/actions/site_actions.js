const SITES_LIST_REQUEST = "SITES_LIST_REQUEST"
const SITES_LIST_REQUEST_SUCCESS = "SITES_LIST_REQUEST_SUCCESS"
const SITES_SHOW_REQUEST = "SITES_SHOW_REQUEST"
const SITES_SHOW_REQUEST_SUCCESS = "SITES_SHOW_REQUEST_SUCCESS"


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


/**
* Async action creator that returns a single site given its name
*/
const showSite = siteName => ({
    type: SITES_LIST_REQUEST,
    payload: {
        request: {
            url: `/sites/${siteName}`
        }
    }
})


export {
    SITES_LIST_REQUEST,
    SITES_LIST_REQUEST_SUCCESS,
    SITES_SHOW_REQUEST,
    SITES_SHOW_REQUEST_SUCCESS,
    fetchSites,
    showSite
}
