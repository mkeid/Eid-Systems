const CREATE_POST_REQUEST = "CREATE_POST_REQUEST"
const CREATE_POST_REQUEST_SUCCESS = "CREATE_POST_REQUEST_SUCCESS"
const DELETE_POST_REQUEST = "DELETE_POST_REQUEST"
const DELETE_POST_REQUEST_SUCCESS = "DELETE_POST_REQUEST_SUCCESS"
const FETCH_POST_REQUEST = "FETCH_POST_REQUEST"
const FETCH_POST_REQUEST_SUCCESS = "FETCH_POST_REQUEST_SUCCESS"
const UPDATE_POST_REQUEST = "UPDATE_POST_REQUEST"
const UPDATE_POST_REQUEST_SUCCESS = "UPDATE_POST_REQUEST_SUCCESS"


/**
* Asyc action creator that creates a new post object
*/
const createPost = (post) => ({
    type: CREATE_PROJECT_REQUEST,
    payload: {
        request: {
            method: "post",
            url: `/posts/${post._id}`,
            data: post
        }
    }
})


/**
* Async action creator that deletes an existing post object
*/
const deletePost = (post) => ({
    type: DELETE_PROJECT_REQUEST,
    payload: {
        request: {
            method: "delete",
            url: `/posts/${post._id}`
        }
    }
})


/**
* Async action creator that returns a specified post object
*/
const fetchPost = (postID => ({
    type: FETCH_POST_REQUEST,
    payload: {
        request: {
            url: `/posts/${postID}`
        }
    }
})


/**
* Async action creator that update sa particular post object
*/
const updatePost = (post) => ({
    type: UPDATE_POST_REQUEST,
    payload: {
        request: {
            method: "put",
            url: `/posts/${post._id}`,
            data: post
        }
    }
})


module.exports = {
    CREATE_POST_REQUEST,
    CREATE_PROJECT_REQUEST_SUCCESS,
    DELETE_POST_REQUEST,
    DELETE_POST_REQUEST_SUCCESS
    FETCH_STORE_REQUEST,
    FETCH_STORE_REQUEST_SUCCESS,
    createPost,
    deletePost,
    fetchPost,
    updatePost
}
