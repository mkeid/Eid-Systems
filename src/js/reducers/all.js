import { combineReducers } from 'redux'
import IndexReducer from "./index"
import NavReducer from "./nav"
import PostsReducer from "./posts"
import ProjectsReducer from "./projects"
import { AboutReducer, SkillsReducer } from "./skills"

const allReducers = combineReducers({
    index: IndexReducer,
    nav: NavReducer,
    about: AboutReducer,
    posts: PostsReducer,
    projects: ProjectsReducer,
    skills: SkillsReducer
})

module.exports = allReducers
