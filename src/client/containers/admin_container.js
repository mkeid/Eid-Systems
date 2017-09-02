import { connect } from "react-redux"
import AdminIndex from "../components/admin/admin_index"

// Init redux container for "Admin" page
const AdminContainer = connect(state => state)(AdminIndex)

// Promote AdminIndex from a component to a container
export default AdminContainer
