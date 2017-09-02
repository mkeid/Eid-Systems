import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"
import AboutReducer from "./about_reducer"
import ContactReducer from "./contact_reducer"
import IndexReducer from "./index_reducer"
import LinksReducer from "./links_reducer"
import NavReducer from "./nav_reducer"
import PostsReducer from "./posts_reducer"
import ProjectsReducer from "./projects_reducer"
import SkillsReducer from "./skills_reducer"
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
    links: LinksReducer,
    nav: NavReducer,
    posts: PostsReducer,
    projects: ProjectsReducer,
    skills: SkillsReducer
})


export default CombinedReducer
