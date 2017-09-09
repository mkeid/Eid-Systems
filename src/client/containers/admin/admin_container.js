import { connect } from "react-redux"
import AdminSite from "../../components/admin/admin_site"
import { updateAdminPage } from "../../actions/admin_actions"
import { logout } from "../../actions/auth_actions"
import { fetchPosts, showPost } from "../../actions/post_actions"
import { fetchProjects, showProject } from "../../actions/project_actions"
import { showSite, updateSite } from "../../actions/site_actions"
import { fetchSkills, showSkill } from "../../actions/skill_actions"

// Wire up the admin site component with redux to propagate state
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

const AdminContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminSite)

export default AdminContainer
