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
const createProject = (project) => ({
    type: PROJECTS_CREATE_REQUEST,
    payload: {
        request: {
            method: "post",
            url: "/projects/create",
            data: project
        }
    }
})


/**
* Async action creator that deletes a particular project object
*/
const deleteProject = (project) => ({
    type: PROJECTS_DESTROY_REQUEST,
    payload: {
        request: {
            method: "delete",
            url: `/projects/${project._id}`
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
const updateProject = (project) => ({
    type: PROJECTS_UPDATE_REQUEST,
    payload: {
        request: {
            method: "put",
            url: `/projects/${project._id}`,
            data: project
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
