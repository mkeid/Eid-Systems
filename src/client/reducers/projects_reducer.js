import _ from "lodash"
import {
    PROJECTS_CREATE_REQUEST_SUCCESS,
    PROJECTS_DESTROY_REQUEST_SUCCESS,
    PROJECTS_LIST_REQUEST_SUCCESS,
    PROJECTS_SHOW_REQUEST_SUCCESS,
    PROJECTS_UPDATE_REQUEST_SUCCESS
} from "../actions/project_actions"

export default (state = {}, action) => {
    switch (action.type) {
        // Created a new project document
        case PROJECTS_CREATE_REQUEST_SUCCESS:
            const createdProject = action.payload.data.project
            return Object.assign({}, state,
                {[createdProject["_id"]]: createdProject}
            )

        // Deleted a single project document
        case PROJECTS_DESTROY_REQUEST_SUCCESS:
            return _.omit(state, action.payload.data)

        // Retrieved a list of project documents
        case PROJECTS_LIST_REQUEST_SUCCESS:
            const listProjects = action.payload.data.projects
            return _.mapKeys(listProjects, "_id")

        // Retrieved a single project document
        case PROJECTS_SHOW_REQUEST_SUCCESS:
            const project = action.payload.data.project
            let showProjects = state.projects

            if (showProjects) {
                showProjects[project._id] = project
            } else {
                showProjects = {
                    [project._id]: project
                }
            }

            return showProjects

        // Updated a single project document
        case PROJECTS_UPDATE_REQUEST_SUCCESS:
            const updatedProject = action.payload.data.project
            return Object.assign({}, state,
                {[updatedProject["_id"]]: updatedProject}
            )

        // Only update state when the action type is specified
        default:
            return state;
    }
}
