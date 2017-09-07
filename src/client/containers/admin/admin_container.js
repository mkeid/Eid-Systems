import { connect } from "react-redux"
import AdminSite from "../../components/admin/admin_site"
import { logout } from "../../actions/auth_actions"
import { fetchPosts } from "../../actions/post_actions"
import { fetchProjects } from "../../actions/project_actions"
import { fetchSkills } from "../../actions/skill_actions"

const mapStateToProps = state => ({
    about: state.about,
    auth: state.auth,
    index: state.index,
    posts: _.map(state.posts, (value, key) => value),
    projects: _.map(state.projects, (value, key) => value),
    skills: _.map(state.skills, (value, key) => value)
})

// Init redux container for "Admin" page
const AdminContainer = connect(
    mapStateToProps,
    {
        fetchPosts,
        fetchProjects,
        fetchSkills,
        logout
    }
)(AdminSite)

// Promote AdminIndex from a component to a container
export default AdminContainer
