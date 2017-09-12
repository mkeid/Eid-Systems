const SITES_LIST_REQUEST = "SITES_LIST_REQUEST"
const SITES_LIST_REQUEST_SUCCESS = "SITES_LIST_REQUEST_SUCCESS"
const SITES_SHOW_REQUEST = "SITES_SHOW_REQUEST"
const SITES_SHOW_REQUEST_SUCCESS = "SITES_SHOW_REQUEST_SUCCESS"
const SITES_UPDATE_REQUEST = "SITES_UPDATE_REQUEST"
const SITES_UPDATE_REQUEST_SUCCESS = "SITES_UPDATE_REQUEST_SUCCESS"


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
const showSite = siteTitle => ({
    type: SITES_LIST_REQUEST,
    payload: {
        request: {
            url: `/sites/${siteTitle}`
        }
    }
})


/**
* Async action creator that updates a particular site given its name
*/
const updateSite = (siteTitle, data) => ({
    type: SITES_UPDATE_REQUEST,
    payload: {
        request: {
            method: "patch",
            url: `/sites/${siteTitle}`,
            data
        }
    }
})


export {
    SITES_LIST_REQUEST,
    SITES_LIST_REQUEST_SUCCESS,
    SITES_SHOW_REQUEST,
    SITES_SHOW_REQUEST_SUCCESS,
    SITES_UPDATE_REQUEST,
    SITES_UPDATE_REQUEST_SUCCESS,
    fetchSites,
    showSite,
    updateSite
}
