import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import AdminReducer from "./admin_reducer";
import AuthReducer from "./auth_reducer";
import ContactReducer from "./contact_reducer";
import LinksReducer from "./links_reducer";
import NavReducer from "./nav_reducer";
import PostsReducer from "./posts_reducer";
import ProjectsReducer from "./projects_reducer";
import { routerReducer } from "react-router-redux";
import SitesReducer from "./sites_reducer";
import SkillsReducer from "./skills_reducer";

const CombinedReducer = combineReducers({
    admin: AdminReducer,
    auth: AuthReducer,
    contact: ContactReducer,
    form: formReducer,
    links: LinksReducer,
    nav: NavReducer,
    posts: PostsReducer,
    projects: ProjectsReducer,
    sites: SitesReducer,
    routing: routerReducer,
    skills: SkillsReducer
});

export default CombinedReducer;
