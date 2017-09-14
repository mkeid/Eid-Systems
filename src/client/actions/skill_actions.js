const SKILLS_CREATE_REQUEST = "SKILLS_CREATE_REQUEST"
const SKILLS_CREATE_REQUEST_SUCCESS = "SKILLS_CREATE_REQUEST_SUCCESS"
const SKILLS_DESTROY_REQUEST = "SKILLS_DESTROY_REQUEST"
const SKILLS_DESTROY_REQUEST_SUCCESS = "SKILLS_DESTROY_REQUEST_SUCCESS"
const SKILLS_LIST_REQUEST = "SKILLS_LIST_REQUEST"
const SKILLS_LIST_REQUEST_SUCCESS = "SKILLS_LIST_REQUEST_SUCCESS"
const SKILLS_SHOW_REQUEST = "SKILLS_SHOW_REQUEST"
const SKILLS_SHOW_REQUEST_SUCCESS = "SKILLS_SHOW_REQUEST_SUCCESS"
const SKILLS_UPDATE_REQUEST = "SKILLS_UPDATE_REQUEST"
const SKILLS_UPDATE_REQUEST_SUCCESS = "SKILLS_UPDATE_REQUEST_SUCCESS"


/**
* Async action creator that creates a new skill object
*/
const createSkill = skill => ({
    type: SKILLS_CREATE_REQUEST,
    payload: {
        request: {
            method: "post",
            url: "/skills",
            data: skill
        }
    }
})


/**
* Async action creator that deletes a specified skill object
*/
const deleteSkill = skillId => ({
    type: SKILLS_DESTROY_REQUEST,
    payload: {
        request: {
            method: "delete",
            url: `/skills/${skillId}`
        }
    }
})


/**
* Async action creator that retrieves the entire list of skills
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
* Async action creator that returns a specified skill object
*/
const showSkill = skillId => ({
    type: SKILLS_SHOW_REQUEST,
    payload: {
        request: {
            url: `/skills/${skillId}`
        }
    }
})


/**
* Async action creator that updates a particular skill object
*/
const updateSkill = (skillId, data) => ({
    type: SKILLS_UPDATE_REQUEST,
    payload: {
        request: {
            method: "patch",
            url: `/skills/${skillId}`,
            data
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
    SKILLS_SHOW_REQUEST,
    SKILLS_SHOW_REQUEST_SUCCESS,
    SKILLS_UPDATE_REQUEST,
    SKILLS_UPDATE_REQUEST_SUCCESS,
    createSkill,
    deleteSkill,
    fetchSkills,
    showSkill,
    updateSkill
}
