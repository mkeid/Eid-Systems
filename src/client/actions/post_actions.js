const POSTS_CREATE_REQUEST = "POSTS_CREATE_REQUEST"
const POSTS_CREATE_REQUEST_SUCCESS = "POSTS_CREATE_REQUEST_SUCCESS"
const POSTS_DESTROY_REQUEST = "POSTS_DESTROY_REQUEST"
const POSTS_DESTROY_REQUEST_SUCCESS = "POSTS_DESTROY_REQUEST_SUCCESS"
const POSTS_SHOW_REQUEST = "POSTS_SHOW_REQUEST"
const POSTS_SHOW_REQUEST_SUCCESS = "POSTS_SHOW_REQUEST_SUCCESS"
const POSTS_LIST_REQUEST = "POSTS_LIST_REQUEST"
const POSTS_LIST_REQUEST_SUCCESS = "POSTS_LIST_REQUEST_SUCCESS"
const POSTS_UPDATE_REQUEST = "POSTS_UPDATE_REQUEST"
const POSTS_UPDATE_REQUEST_SUCCESS = "POSTS_UPDATE_REQUEST_SUCCESS"


/**
* Asyc action creator that creates a new post object
*/
const createPost = (post) => ({
    type: POSTS_CREATE_REQUEST,
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
    type: POSTS_DESTROY_REQUEST,
    payload: {
        request: {
            method: "delete",
            url: `/posts/${post._id}`
        }
    }
})


/**
* Async action creator that returns a list of posts
*/
const fetchPosts = () => ({
    type: POSTS_LIST_REQUEST,
    payload: {
        request: {
            url: "/posts"
        }
    }
})


/**
* Async action creator that returns a specified post object
*/
const showPost = postId => ({
    type: POSTS_SHOW_REQUEST,
    payload: {
        request: {
            url: `/posts/${postId}`
        }
    }
})


/**
* Async action creator that update sa particular post object
*/
const updatePost = (post) => ({
    type: POSTS_UPDATE_REQUEST,
    payload: {
        request: {
            method: "put",
            url: `/posts/${post._id}`,
            data: post
        }
    }
})


export {
    POSTS_CREATE_REQUEST,
    POSTS_CREATE_REQUEST_SUCCESS,
    POSTS_DESTROY_REQUEST,
    POSTS_DESTROY_REQUEST_SUCCESS,
    POSTS_SHOW_REQUEST,
    POSTS_SHOW_REQUEST_SUCCESS,
    POSTS_LIST_REQUEST,
    POSTS_LIST_REQUEST_SUCCESS,
    createPost,
    deletePost,
    fetchPosts,
    showPost,
    updatePost
}
