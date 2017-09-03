import { connect } from "react-redux"
import AdminSite from "../../components/admin/admin_site"

// Init redux container for "Admin" page
const AdminContainer = connect(state => state)(AdminSite)

// Promote AdminIndex from a component to a container
export default AdminContainer
