import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"
import AboutReducer from "./about"
import ContactReducer from "./contact"
import IndexReducer from "./index"
import NavReducer from "./nav"
import PostsReducer from "./posts"
import ProjectsReducer from "./projects"
import SkillsReducer from "./skills"
import {
    FETCH_STORE_REQUEST,
    FETCH_STORE_REQUEST_SUCCESS,
    FETCH_STORE_ERROR,
} from "../actions/root"


/**
* Primary redux reducer for the site
*/
const RootReducer = (state = null, action) => {
    switch (action.type) {

        case FETCH_STORE_REQUEST:
            return Object.assign({}, state, {isLoading: true})

        case FETCH_STORE_REQUEST_SUCCESS:
            return Object.assign({}, state, {isLoading: false})

        case FETCH_STORE_ERROR:
            return Object.assign({}, state, {isLoading: false, hasFailed: true})

        // Only update state when the action type is specified
        default:
            return state
    }
}

const CombinedReducer = combineReducers({
    root: RootReducer,
    about: AboutReducer,
    contact: ContactReducer,
    form: formReducer,
    index: IndexReducer,
    nav: NavReducer,
    posts: PostsReducer,
    projects: ProjectsReducer,
    skills: SkillsReducer
})


export default CombinedReducer
