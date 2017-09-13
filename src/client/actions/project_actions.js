const PROJECTS_CREATE_REQUEST = "PROJECTS_CREATE_REQUEST"
const PROJECTS_CREATE_REQUEST_SUCCESS = "PROJECTS_CREATE_REQUEST_SUCCESS"
const PROJECTS_DESTROY_REQUEST = "PROJECTS_DESTROY_REQUEST"
const PROJECTS_DESTROY_REQUEST_SUCCESS = "PROJECTS_DESTROY_REQUEST_SUCCESS"
const PROJECTS_LIST_REQUEST = "PROJECTS_LIST_REQUEST"
const PROJECTS_LIST_REQUEST_SUCCESS = "PROJECTS_LIST_REQUEST_SUCCESS"
const PROJECTS_SHOW_REQUEST = "PROJECTS_SHOW_REQUEST"
const PROJECTS_SHOW_REQUEST_SUCCESS = "PROJECTS_SHOW_REQUEST_SUCCESS"
const PROJECTS_UPDATE_REQUEST = "PROJECTS_UPDATE_REQUEST"
const PROJECTS_UPDATE_REQUEST_SUCCESS = "PROJECTS_UPDATE_REQUEST_SUCCESS"


/**
* Async action creator that creates a new project object
*/
const createProject = project => ({
    type: PROJECTS_CREATE_REQUEST,
    payload: {
        request: {
            method: "post",
            url: "/projects",
            data: project
        }
    }
})


/**
* Async action creator that deletes a particular project object
*/
const deleteProject = projectId => ({
    type: PROJECTS_DESTROY_REQUEST,
    payload: {
        request: {
            method: "delete",
            url: `/projects/${projectId}`
        }
    }
})


/**
* Async action creator that returns a list of projects
*/
const fetchProjects = () => ({
    type: PROJECTS_LIST_REQUEST,
    payload: {
        request: {
            url: "/projects"
        }
    }
})


/**
* Async action creator that returns a specified project object
*/
const showProject = projectId => ({
    type: PROJECTS_SHOW_REQUEST,
    payload: {
        request: {
            url: `/projects/${projectId}`
        }
    }
})


/**
* Async action creator that updates a specified project object
*/
const updateProject = (projectId, data) => ({
    type: PROJECTS_UPDATE_REQUEST,
    payload: {
        request: {
            method: "patch",
            url: `/projects/${projectId}`,
            data
        }
    }
})


export {
    PROJECTS_CREATE_REQUEST,
    PROJECTS_CREATE_REQUEST_SUCCESS,
    PROJECTS_DESTROY_REQUEST,
    PROJECTS_DESTROY_REQUEST_SUCCESS,
    PROJECTS_LIST_REQUEST,
    PROJECTS_LIST_REQUEST_SUCCESS,
    PROJECTS_SHOW_REQUEST,
    PROJECTS_SHOW_REQUEST_SUCCESS,
    PROJECTS_UPDATE_REQUEST,
    PROJECTS_UPDATE_REQUEST_SUCCESS,
    createProject,
    deleteProject,
    fetchProjects,
    showProject,
    updateProject
}
