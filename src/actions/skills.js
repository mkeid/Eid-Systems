const CREATE_SKILL_REQUEST = "CREATE_SKILL_REQUEST"
const CREATE_SKILL_REQUEST_SUCCESS = "CREATE_SKILL_REQUEST_SUCCESS"
const DELETE_SKILL_REQUEST = "DELETE_SKILL_REQUEST"
const DELETE_SKILL_REQUEST_SUCCESS = "DELETE_SKILL_REQUEST_SUCCESS"
const UPDATE_SKILL_REQUEST = "UPDATE_SKILL_REQUEST"
const UPDATE_SKILL_REQUEST_SUCCESS = "UPDATE_SKILL_REQUEST_SUCCESS"


/**
* Async action creator that creates a new skill object
*/
const createSkill = (skill) => ({
    type: CREATE_SKILL_REQUEST,
    payload: {
        method: "post",
        url: "/skills/create",
        data: skill
    }
})


/**
* Async action creator that deletes a specified skill object
*/
const deleteSkill = (skill) => ({
    type: DELETE_SKILL_REQUEST_SUCCESS,
    payload: {
        method: "delete",
        url: `/skills/${skill._id}`
    }
})


/**
* Async action creator that updates a particular skill object
*/
const updateSkill = (skill) => ({
    type: UPDATE_SKILL_REQUEST_SUCCESS,
    payload: {
        method: "put",
        url: `/skills/${skill._id}`,
        data: skill
    }
})


module.exports = {
    CREATE_SKILL_REQUEST,
    CREATE_SKILL_REQUEST_SUCCESS,
    DELETE_SKILL_REQUEST,
    DELETE_SKILL_REQUEST_SUCCESS,
    UPDATE_SKILL_REQUEST,
    UPDATE_SKILL_REQUEST_SUCCESS,
    createSkill,
    deleteSkill,
    updateSkill
}
