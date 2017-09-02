const LINKS_LIST_REQUEST = "LINKS_LIST_REQUEST"
const LINKS_LIST_REQUEST_SUCCESS = "LINKS_LIST_REQUEST_SUCCESS"

/**
* Async action creator that returns a list of links
*/
const fetchLinks = () => ({
    type: LINKS_LIST_REQUEST,
    payload: {
        request: {
            url: "/links"
        }
    }
})


export {
    LINKS_LIST_REQUEST,
    LINKS_LIST_REQUEST_SUCCESS,
    fetchLinks,
}
