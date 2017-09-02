const SKILLS_CREATE_REQUEST = "SKILLS_CREATE_REQUEST"
const SKILLS_CREATE_REQUEST_SUCCESS = "SKILLS_CREATE_REQUEST_SUCCESS"
const SKILLS_DESTROY_REQUEST = "SKILLS_DESTROY_REQUEST"
const SKILLS_DESTROY_REQUEST_SUCCESS = "SKILLS_DESTROY_REQUEST_SUCCESS"
const SKILLS_LIST_REQUEST = "SKILLS_LIST_REQUEST"
const SKILLS_LIST_REQUEST_SUCCESS = "SKILLS_LIST_REQUEST_SUCCESS"
const SKILLS_UPDATE_REQUEST = "SKILLS_UPDATE_REQUEST"
const SKILLS_UPDATE_REQUEST_SUCCESS = "SKILLS_UPDATE_REQUEST_SUCCESS"


/**
* Async action creator that creates a new skill object
*/
const createSkill = (skill) => ({
    type: SKILLS_CREATE_REQUEST,
    payload: {
        request: {
            method: "post",
            url: "/skills/create",
            data: skill
        }
    }
})


/**
* Async action creator that deletes a specified skill object
*/
const deleteSkill = (skill) => ({
    type: SKILLS_DESTROY_REQUEST_SUCCESS,
    payload: {
        request: {
            method: "delete",
            url: `/skills/${skill._id}`
        }
    }
})


/**
* Async actopm creator that retrieves the entire list of skills
*/
const fetchSkills = () => ({
    type: SKILLS_LIST_REQUEST,
    payload: {
        request: {
            url: "/skills"
        }
    }
})


/**
* Async action creator that updates a particular skill object
*/
const updateSkill = (skill) => ({
    type: SKILLS_UPDATE_REQUEST_SUCCESS,
    payload: {
        request: {
            method: "put",
            url: `/skills/${skill._id}`,
            data: skill
        }
    }
})


export {
    SKILLS_CREATE_REQUEST,
    SKILLS_CREATE_REQUEST_SUCCESS,
    SKILLS_DESTROY_REQUEST,
    SKILLS_DESTROY_REQUEST_SUCCESS,
    SKILLS_LIST_REQUEST,
    SKILLS_LIST_REQUEST_SUCCESS,
    SKILLS_UPDATE_REQUEST,
    SKILLS_UPDATE_REQUEST_SUCCESS,
    createSkill,
    deleteSkill,
    fetchSkills,
    updateSkill
}
