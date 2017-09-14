const LINKS_CREATE_REQUEST = "LINKS_CREATE_REQUEST"
const LINKS_CREATE_REQUEST_SUCCESS = "LINKS_CREATE_REQUEST_SUCCESS"
const LINKS_DESTROY_REQUEST = "LINKS_DESTROY_REQUEST"
const LINKS_DESTROY_REQUEST_SUCCESS = "LINKS_DESTROY_REQUEST_SUCCESS"
const LINKS_LIST_REQUEST = "LINKS_LIST_REQUEST"
const LINKS_LIST_REQUEST_SUCCESS = "LINKS_LIST_REQUEST_SUCCESS"
const LINKS_SHOW_REQUEST = "LINKS_SHOW_REQUEST"
const LINKS_SHOW_REQUEST_SUCCESS = "LINKS_SHOW_REQUEST_SUCCESS"
const LINKS_UPDATE_REQUEST = "LINKS_UPDATE_REQUEST"
const LINKS_UPDATE_REQUEST_SUCCESS = "LINKS_UPDATE_REQUEST_SUCCESS"


/**
* Asyc action creator that creates a new link object
*/
const createLink = link => ({
    type: LINKS_CREATE_REQUEST,
    payload: {
        request: {
            method: "post",
            url: `/links`,
            data: link
        }
    }
})


/**
* Async action creator that deletes an existing link object
*/
const deleteLink = linkId => ({
    type: LINKS_DESTROY_REQUEST,
    payload: {
        request: {
            method: "delete",
            url: `/links/${linkId}`
        }
    }
})


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


/**
* Async action creator that returns a specified link object
*/
const showLink = linkId => ({
    type: LINKS_SHOW_REQUEST,
    payload: {
        request: {
            url: `/links/${linkId}`
        }
    }
})


/**
* Async action creator that updates a particular link object
*/
const updateLink = (linkId, data) => ({
    type: LINKS_UPDATE_REQUEST,
    payload: {
        request: {
            method: "patch",
            url: `/links/${linkId}`,
            data
        }
    }
})


export {
    LINKS_CREATE_REQUEST,
    LINKS_CREATE_REQUEST_SUCCESS,
    LINKS_DESTROY_REQUEST,
    LINKS_DESTROY_REQUEST_SUCCESS,
    LINKS_LIST_REQUEST,
    LINKS_LIST_REQUEST_SUCCESS,
    LINKS_SHOW_REQUEST,
    LINKS_SHOW_REQUEST_SUCCESS,
    LINKS_UPDATE_REQUEST,
    LINKS_UPDATE_REQUEST_SUCCESS,
    createLink,
    deleteLink,
    fetchLinks,
    showLink,
    updateLink,
}
