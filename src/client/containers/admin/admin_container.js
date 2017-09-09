import { connect } from "react-redux"
import AdminSite from "../../components/admin/admin_site"
import { updateAdminPage } from "../../actions/admin_actions"
import { logout } from "../../actions/auth_actions"
import { fetchPosts, showPost } from "../../actions/post_actions"
import { fetchProjects, showProject } from "../../actions/project_actions"
import { showSite, updateSite } from "../../actions/site_actions"
import { fetchSkills, showSkill } from "../../actions/skill_actions"

const mapStateToProps = state => state
const mapDispatchToProps = ({
    fetchPosts,
    showPost,

    fetchProjects,
    showProject,

    fetchSkills,
    showSkill,

    showSite,

    logout,
    updateAdminPage
})

// Init redux container for "Admin" page
const AdminContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminSite)

// Promote AdminIndex from a component to a container
export default AdminContainer
