const CREATE_PROJECT_REQUEST = "CREATE_PROJECT_REQUEST"
const CREATE_PROJECT_REQUEST_SUCCESS = "CREATE_PROJECT_REQUEST_SUCCESS"
const DELETE_PROJECT_REQUEST = "DELETE_PROJECT_REQUEST"
const DELETE_PROJECT_REQUEST_SUCCESS = "DELETE_PROJECT_REQUEST_SUCCESS"
const UPDATE_PROJECT_REQUEST = "UPDATE_PROJECT_REQUEST"
const UPDATE_PROJECT_REQUEST_SUCCESS = "UPDATE_PROJECT_REQUEST_SUCCESS"


/**
* Async action creator that creates a new project object
*/
const createProject = (project) => ({
    type: CREATE_PROJECT_REQUEST,
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
    type: DELETE_PROJECT_REQUEST,
    payload: {
        request: {
            method: "delete",
            url: `/projects/${project._id}`
        }
    }
})


/**
* Async action creator that updates a specified project object
*/
const updateProject = (project) => ({
    type: UPDATE_PROJECT_REQUEST,
    payload: {
        request: {
            method: "put",
            url: `/projects/${project._id}`,
            data: project
        }
    }
})


export {
    CREATE_PROJECT_REQUEST,
    CREATE_PROJECT_REQUEST_SUCCESS,
    DELETE_PROJECT_REQUEST,
    DELETE_PROJECT_REQUEST_SUCCESS,
    UPDATE_PROJECT_REQUEST,
    UPDATE_PROJECT_REQUEST_SUCCESS,
    createProject,
    deleteProject,
    updateProject
}
