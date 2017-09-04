import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"
import AuthReducer from "./auth_reducer"
import ContactReducer from "./contact_reducer"
import LinksReducer from "./links_reducer"
import NavReducer from "./nav_reducer"
import PostsReducer from "./posts_reducer"
import ProjectsReducer from "./projects_reducer"
import SitesReducer from "./sites_reducer"
import SkillsReducer from "./skills_reducer"

const CombinedReducer = combineReducers({
    auth: AuthReducer,
    contact: ContactReducer,
    form: formReducer,
    links: LinksReducer,
    nav: NavReducer,
    posts: PostsReducer,
    projects: ProjectsReducer,
    sites: SitesReducer,
    skills: SkillsReducer
})

export default CombinedReducer
