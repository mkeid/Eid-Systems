const CREATE_SKILL_REQUEST = "CREATE_SKILL_REQUEST"
const CREATE_SKILL_REQUEST_SUCCESS = "CREATE_SKILL_REQUEST_SUCCESS"
const DELETE_SKILL_REQUEST = "DELETE_SKILL_REQUEST"
const DELETE_SKILL_REQUEST_SUCCESS = "DELETE_SKILL_REQUEST_SUCCESS"
const FETCH_SKILLS_REQUEST = "FETCH_SKILLS_REQUEST"
const FETCH_SKILLS_REQUEST_SUCCESS = "FETCH_SKILLS_REQUEST_SUCCESS"
const UPDATE_SKILL_REQUEST = "UPDATE_SKILL_REQUEST"
const UPDATE_SKILL_REQUEST_SUCCESS = "UPDATE_SKILL_REQUEST_SUCCESS"


/**
* Async action creator that creates a new skill object
*/
const createSkill = (skill) => ({
    type: CREATE_SKILL_REQUEST,
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
    type: DELETE_SKILL_REQUEST_SUCCESS,
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
    type: FETCH_SKILLS_REQUEST,
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
    type: UPDATE_SKILL_REQUEST_SUCCESS,
    payload: {
        request: {
            method: "put",
            url: `/skills/${skill._id}`,
            data: skill
        }
    }
})


module.exports = {
    CREATE_SKILL_REQUEST,
    CREATE_SKILL_REQUEST_SUCCESS,
    DELETE_SKILL_REQUEST,
    DELETE_SKILL_REQUEST_SUCCESS,
    FETCH_SKILLS_REQUEST,
    FETCH_SKILLS_REQUEST_SUCCESS,
    UPDATE_SKILL_REQUEST,
    UPDATE_SKILL_REQUEST_SUCCESS,
    createSkill,
    deleteSkill,
    fetchSkills,
    updateSkill
}
