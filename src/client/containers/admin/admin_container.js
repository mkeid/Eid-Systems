import { connect } from "react-redux"
import AdminSite from "../../components/admin/admin_site"
import { updateAdminPage } from "../../actions/admin_actions"
import { logout } from "../../actions/auth_actions"

// Post modules
import {
    createPost, deletePost, fetchPosts, showPost, updatePost
} from "../../actions/post_actions"

// Project modules
import {
    createProject, deleteProject, fetchProjects, showProject, updateProject
} from "../../actions/project_actions"

// Site modules
import {
    showSite, updateSite
} from "../../actions/site_actions"

// Skill modules
import {
    createSkill, deleteSkill, fetchSkills, showSkill, updateSkill
} from "../../actions/skill_actions"

// Wire up the admin site component with redux to propagate state
const mapStateToProps = state => state
const mapDispatchToProps = ({
    createPost,
    deletePost,
    fetchPosts,
    showPost,
    updatePost,

    createProject,
    deleteProject,
    fetchProjects,
    showProject,
    updateProject,

    createSkill,
    deleteSkill,
    fetchSkills,
    showSkill,
    updateSkill,

    showSite,
    updateSite,

    logout,
    updateAdminPage
})

const AdminContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminSite)

export default AdminContainer
